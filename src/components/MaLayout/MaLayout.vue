<script>
import { responsivePropValidator } from '@margarita/utils/responsivePropValidator'
import { spacing } from '../../tokens'
import MaStack from '../MaStack'
import MaColumns from '../MaColumns'

const autoflowOperator = '*'

/**
 * Renders a complex layout made of rows and columns following the Design System guidelines
 *
 * [Component's API documentation](https://holaluz.github.io/margarita/?path=/story/layout-layout--layout)
 */
export default {
  name: 'MaLayout',

  functional: true,

  props: {
    /**
     * Defines the columns layout.
     *
     * If an array is passed, values will target the design system breakpoints.
     * ```ts
     * <ma-layout columns="12">...</ma-layout>
     * <ma-layout :columns="['4', '4', '4']">...</ma-layout>
     * ```
     * [Layout documentation](https://holaluz.github.io/margarita/?path=/docs/layout-layout--layout)
     */
    columns: {
      type: [Array, String],
      default: '',
    },

    /**
     * Sets the space gap between child rows and columns.
     *
     * If an array is passed, values will target the design system breakpoints.
     * ```ts
     * // This would apply medium on all the different breakpoints
     * gap = 'small'
     * // This would apply none on mobile, small on tablet and large on desktop
     * :gap="['none', 'small', 'large']"
     * ```
     *
     * [Spacing tokens documentation](https://holaluz.github.io/margarita/?path=/story/tokens-spacing--page)
     * @values none, xsmall, small, medium, large, xlarge, 2x-large, 3x-large, 4x-large, 5x-large, 6x-large
     */
    gap: {
      type: [Array, String],
      required: true,
      validator: responsivePropValidator(Object.keys(spacing)),
    },

    /**
     * Defines how the space between and around content items is distributed. Defaults to start.
     *
     * @values space-around, space-between, start, end, center
     */
    justify: {
      type: String,
      default: 'start',
      validator: (value) =>
        ['space-around', 'space-between', 'start', 'end', 'center'].includes(
          value
        ),
    },

    /**
     * Sets the children vertical alignment. Defaults to fill.
     *
     * If an array is passed, values will target the design system breakpoints.
     * ```ts
     * // This would apply start on all the different breakpoints
     * align = 'start'
     * // This would apply fill on mobile, center on tablet and start on desktop
     * :align="['fill', 'center', 'start']"
     * ```
     * @values start, center, fill, end
     */
    verticalAlign: {
      type: String,
      default: 'fill',
      validator: (value) => ['start', 'center', 'fill', 'end'].includes(value),
    },
  },

  render(createElement, { parent, props, slots, data }) {
    let dom = slots().default

    if (props.columns) {
      const grid = getGrid({ parent, columns: props.columns })
      dom = renderGrid({
        createElement,
        dom,
        grid,
        gap: props.gap,
        justify: props.justify,
        verticalAlign: props.verticalAlign,
        data,
      })
    }

    return renderStack({
      createElement,
      dom,
      gap: props.gap,
      data,
    })
  },
}

function getGrid({ parent, columns }) {
  const responsiveColumns = parent.$layout.getResponsivePropValue(columns)
  return responsiveColumns.split(' - ').map((row) => row.split(' '))
}

function renderStack({ createElement, dom, gap, data }) {
  return createElement(MaStack, { props: { space: gap }, ...data }, dom)
}

/**
 * Renders a Grid (a set of rows and columns) given an array of HtmlElements and the columns prop.
 *
 * For example, for this inputs:
 * ```ts
 * const dom = ['foo', 'bar', 'baz', 'hello', 'world']
 * const grid = ['2 2', '12', '3 3']
 *
 * // Will return
 * return [
 *    maColumns(['foo', 'bar'], '2 2'),
 *    maColumns(['baz'], '12')
 *    maColumns(['hello', 'world], '3 3')
 * ]
 * ```
 */
function renderGrid({ createElement, dom, grid, gap, justify, verticalAlign }) {
  const rows = []
  const elements = dom.filter((c) => c.tag)
  let i = 0
  while (elements.length) {
    const row = grid[Math.min(i, grid.length - 1)]
    const children = elements.splice(
      0,
      row[0] === autoflowOperator ? elements.length : row.length
    )
    rows.push(
      renderColumns({
        createElement,
        columns: row.join(' '),
        children,
        gap,
        justify,
        verticalAlign,
      })
    )
    i++
  }
  return rows
}

function renderColumns({
  createElement,
  columns,
  children,
  gap,
  justify,
  verticalAlign,
}) {
  return createElement(
    MaColumns,
    {
      props: {
        gap,
        columns,
        justify,
        verticalAlign,
      },
    },
    children
  )
}
</script>
