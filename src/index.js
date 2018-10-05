import MCol from './components/MCol/MCol.vue'
import MContainer from './components/MContainer/MContainer.vue'
import MRow from './components/MRow/MRow.vue'
import SelectInput from './components/Form/SelectInput/SelectInput.vue'
import TextInput from './components/Form/TextInput/TextInput.vue'

export {
  MCol,
  MContainer,
  MRow,
  SelectInput,
  TextInput
}

export default {
  install (Vue) {
    Vue.component('MCol', MCol)
    Vue.component('MContainer', MContainer)
    Vue.component('MRow', MRow)
    Vue.component('SelectInput', SelectInput)
    Vue.component('TextInput', TextInput)
  }
}
