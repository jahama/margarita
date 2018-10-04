import MCol from './components/MCol/MCol.vue'
import MContainer from './components/MContainer/MContainer.vue'
import MRow from './components/MRow/MRow.vue'
import SelectInput from './components/SelectInput/SelectInput.vue'

export {
  MCol,
  MContainer,
  MRow,
  SelectInput
}

export default {
  install (Vue) {
    Vue.component('MCol', MCol)
    Vue.component('MContainer', MContainer)
    Vue.component('MRow', MRow)
    Vue.component('SelectInput', SelectInput)
  }
}
