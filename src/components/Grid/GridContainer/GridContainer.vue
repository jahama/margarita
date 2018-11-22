<style lang="scss" src="./GridContainer.scss"></style>

<script>
import { mergeDataWithProps } from '@/utils/mergeData'

const componentData = function () {
  return {
    staticClass: 'grid-container',
    class: {
      'grid-container--fluid': this.fluid,
      'grid-container--form': this.form
    }
  }
}

export default {
  name: 'GridContainer',

  functional: true,

  props: {
    fluid: {
      type: Boolean,
      default: false
    },

    form: {
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
