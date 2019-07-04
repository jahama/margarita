<style lang="scss" src="./GridColumn.scss"></style>

<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  name: 'ma-grid-column',

  functional: true,

  props: {
    directionColumn: {
      type: Boolean,
      default: false,
    },

    alignStart: {
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
      staticClass: 'grid-col',
      class: {
        'grid-col--direction-column': props.directionColumn,
        'grid-col--align-start': props.alignStart,
      },
    }

    return createElement(props.tag, mergeData(data, componentData), children)
  },
}
</script>
