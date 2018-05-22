<style lang="scss" src="./MLogo.scss"></style>

<script>
import { mergeDataWithProps } from '@/utils/mergeData'
import logo from './svg/logo.svg'
import logoWhite from './svg/logo-white.svg'

const componentData = function () {
  return {
    staticClass: 'm-logo',
    class: {
      'm-logo--color': this.color
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
    data.attrs['src'] = props.color ? logo : logoWhite
    return h('img', data, children)
  }
}
</script>
