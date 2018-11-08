<style lang="scss" src="./GridRow.scss"></style>

<script>
import { mergeDataWithProps } from '@/utils/mergeData'

const componentData = function () {
  return {
    staticClass: 'grid-row',
    class: {
      'grid-row--no-gutters': this.noGutters,
      'grid-row--no-margin-bottom': this.noMarginBottom,
      'grid-row--direction-column': this.directionColumn,
      'grid-row--has-margin-top': this.hasMarginTop
    }
  }
}

export default {
  name: 'GridRow',

  functional: true,

  props: {
    noGutters: {
      type: Boolean,
      default: false
    },
    noMarginBottom: {
      type: Boolean,
      default: false
    },
    hasMarginTop: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    directionColumn: {
      type: Boolean,
      default: false
    }
  },

  render (h, { props, data, children }) {
    data = mergeDataWithProps(data, componentData, props)
    return h(props.tag, data, children)
  }
}
</script>
