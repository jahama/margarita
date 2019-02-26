<style lang="scss" src="./GridColumn.scss"></style>

<script>
import { mergeDataWithProps } from '@margarita/utils/mergeData'

const componentData = function () {
  return {
    staticClass: 'grid-col',
    class: {
      'grid-col--direction-column': this.directionColumn
    }
  }
}

export default {
  name: 'GridColumn',

  functional: true,

  props: {
    directionColumn: {
      type: Boolean,
      default: false
    },

    tag: {
      type: String,
      default: 'div'
    }
  },

  render (h, { props, data, children }) {
    data = mergeDataWithProps(data, componentData, props)
    return h(props.tag, data, children)
  }
}
</script>
