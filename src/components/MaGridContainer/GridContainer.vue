<style lang="scss" src="./GridContainer.scss"></style>

<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  name: 'ma-grid-container',

  functional: true,

  props: {
    fluid: {
      type: Boolean,
      default: false,
    },

    form: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: 'div',
    },
  },

  render(createElement, { props, data, children }) {
    const componentData = {
      staticClass: 'grid-container',
      class: {
        'grid-container--fluid': props.fluid,
        'grid-container--form': props.form,
      },
    }

    return createElement(props.tag, mergeData(data, componentData), children)
  },
}
</script>
