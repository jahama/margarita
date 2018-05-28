<style lang="scss" src="./MLogo.scss"></style>

<script>
import { mergeDataWithProps } from '@/utils/mergeData'
import imgLogoColor from './svg/logo.svg'
import imgLogoWhite from './svg/logo-white.svg'

const componentData = function () {
  return {
    staticClass: 'm-logo',
    attrs: {
      'src': this.color ? imgLogoColor : imgLogoWhite
    }
  }
}

export default {
  name: 'm-logo',

  functional: true,

  props: {
    color: {
      type: Boolean,
      default: true
    }
  },

  render (h, { props, data, children }) {
    data = mergeDataWithProps(data, componentData, props)
    return h('img', data, children)
  }
}
</script>
