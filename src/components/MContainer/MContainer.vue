<style lang="scss" src="./MContainer.scss"></style>

<script>
import { mergeDataWithProps } from '@/utils/mergeData'

const componentData = function () {
  return {
    staticClass: 'm-container',
    class: {
      'm-container--fluid': this.fluid
    }
  }
}

export default {
  name: 'm-container',

  functional: true,

  props: {
    fluid: {
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
