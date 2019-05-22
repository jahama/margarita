import { render } from 'vue-testing-library'
import GridRow from './GridRow.vue'

describe('GridRow', () => {
  // afterEach(cleanup)

  it('should render content from slot', () => {
    const { getByText } = render(GridRow, {
      slots: { default: 'Hello World' },
    })

    getByText(/Hello World/i)
  })

  it('should render the specified tag', () => {
    const { getByTestId } = render(GridRow, {
      slots: { default: 'asdasd' },
      props: {
        tag: 'span',
      },
    })

    expect(getByTestId('grid-row').nodeName).toBe('SPAN')
  })

  it('should add a class based in a prop', async () => {
    const { getByTestId } = render(GridRow, {
      props: {
        noGutters: true,
        noMarginBottom: true,
        directionColumn: true,
        hasMarginTop: true,
      },
    })

    const gridRowClasses = getByTestId('grid-row').classList

    expect(gridRowClasses.contains('grid-row--no-gutters')).toBeTruthy()
    expect(gridRowClasses.contains('grid-row--no-margin-bottom')).toBeTruthy()
    expect(gridRowClasses.contains('grid-row--direction-column')).toBeTruthy()
    expect(gridRowClasses.contains('grid-row--has-margin-top')).toBeTruthy()
  })
})
