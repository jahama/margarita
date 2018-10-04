import GridColumn from './components/MCol/MCol.vue'
import GridContainer from './components/MContainer/MContainer.vue'
import GridRow from './components/MRow/MRow.vue'
import SelectInput from './components/Form/SelectInput/SelectInput.vue'
import TextInput from './components/Form/TextInput/TextInput.vue'

export {
  GridColumn,
  GridContainer,
  GridRow,
  SelectInput,
  TextInput
}

export default {
  install (Vue) {
    Vue.component('GridColumn', GridColumn)
    Vue.component('GridContainer', GridContainer)
    Vue.component('GridRow', GridRow)
    Vue.component('SelectInput', SelectInput)
    Vue.component('TextInput', TextInput)
  }
}
