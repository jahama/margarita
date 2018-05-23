<style lang="scss" src="./MRow.scss"></style>

<script>
import { mergeDataWithProps } from '@/utils/mergeData'

const componentData = function () {
  return {
    staticClass: 'm-row',
    class: {
      'm-row--no-gutters': this.noGutters
    }
  }
}

export default {
  name: 'm-row',

  functional: true,

  props: {
    noGutters: {
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
