<style lang="scss" src="./MCol.scss"></style>

<script>
import { mergeDataWithProps } from '@/utils/mergeData'

const componentData = function () {
  return {
    staticClass: 'm-col'
  }
}

export default {
  name: 'MCol',

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
