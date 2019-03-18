<style lang="scss" src="./GridRow.scss"></style>

<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  name: 'GridRow',

  functional: true,

  props: {
    directionColumn: {
      type: Boolean,
      default: false
    },

    hasMarginTop: {
      type: Boolean,
      default: false
    },

    noGutters: {
      type: Boolean,
      default: false
    },

    noMarginBottom: {
      type: Boolean,
      default: false
    },

    tag: {
      type: String,
      default: 'div'
    }
  },

  render (createElement, { props, data, children }) {
    const componentData = {
      staticClass: 'grid-row',
      class: {
        'grid-row--no-gutters': props.noGutters,
        'grid-row--no-margin-bottom': props.noMarginBottom,
        'grid-row--direction-column': props.directionColumn,
        'grid-row--has-margin-top': props.hasMarginTop
      }
    }

    return createElement(props.tag, mergeData(data, componentData), children)
  }
}
</script>
