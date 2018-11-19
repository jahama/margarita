import ButtonInput from './components/Form/ButtonInput/ButtonInput.vue'
import CheckboxInput from './components/Form/CheckboxInput/CheckboxInput.vue'
import LayoutCard from './components/Layout/LayoutCard/LayoutCard.vue'
import GridColumn from './components/Grid/GridColumn/GridColumn.vue'
import GridContainer from './components/Grid/GridContainer/GridContainer.vue'
import GridRow from './components/Grid/GridRow/GridRow.vue'
import RadioButton from './components/Form/RadioButton/RadioButton.vue'
import SelectInput from './components/Form/SelectInput/SelectInput.vue'
import TextInput from './components/Form/TextInput/TextInput.vue'

export {
  ButtonInput,
  CheckboxInput,
  GridColumn,
  GridContainer,
  GridRow,
  LayoutCard,
  RadioButton,
  SelectInput,
  TextInput
}

export default {
  install (Vue) {
    Vue.component('ButtonInput', ButtonInput)
    Vue.component('CheckboxInput', CheckboxInput)
    Vue.component('LayoutCard', LayoutCard)
    Vue.component('GridColumn', GridColumn)
    Vue.component('GridContainer', GridContainer)
    Vue.component('GridRow', GridRow)
    Vue.component('RadioButton', RadioButton)
    Vue.component('SelectInput', SelectInput)
    Vue.component('TextInput', TextInput)
  }
}
