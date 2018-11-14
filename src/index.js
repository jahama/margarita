import GridColumn from './components/Grid/GridColumn/GridColumn.vue'
import GridContainer from './components/Grid/GridContainer/GridContainer.vue'
import GridRow from './components/Grid/GridRow/GridRow.vue'
import ButtonInput from './components/Form/ButtonInput/ButtonInput.vue'
import CheckboxInput from './components/Form/CheckboxInput/CheckboxInput.vue'
import RadioButton from './components/Form/RadioButton/RadioButton.vue'
import SelectInput from './components/Form/SelectInput/SelectInput.vue'
import TextInput from './components/Form/TextInput/TextInput.vue'
import LayoutCard from './components/Layout/LayoutCard/LayoutCard.vue'

export {
  GridColumn,
  GridContainer,
  GridRow,
  ButtonInput,
  SelectInput,
  TextInput,
  CheckboxInput,
  RadioButton,
  LayoutCard
}

export default {
  install (Vue) {
    Vue.component('GridColumn', GridColumn)
    Vue.component('GridContainer', GridContainer)
    Vue.component('GridRow', GridRow)
    Vue.component('ButtonInput', ButtonInput)
    Vue.component('CheckboxInput', CheckboxInput)
    Vue.component('RadioButton', RadioButton)
    Vue.component('SelectInput', SelectInput)
    Vue.component('TextInput', TextInput)
    Vue.component('LayoutCard', LayoutCard)
  }
}
