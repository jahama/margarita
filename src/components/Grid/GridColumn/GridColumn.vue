<style lang="scss" src="./GridColumn.scss"></style>

<script>
import { mergeDataWithProps } from '@/utils/mergeData'

const componentData = function () {
  return {
    staticClass: 'grid-col'
  }
}

export default {
  name: 'GridColumn',

  functional: true,

  props: {
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
