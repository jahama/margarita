import AlertBanner from './components/Layout/AlertBanner/AlertBanner.vue'
import ButtonInput from './components/Form/ButtonInput/ButtonInput.vue'
import CheckboxInput from './components/Form/CheckboxInput/CheckboxInput.vue'
import LayoutCard from './components/Layout/LayoutCard/LayoutCard.vue'
import GridColumn from './components/Grid/GridColumn/GridColumn.vue'
import GridContainer from './components/Grid/GridContainer/GridContainer.vue'
import GridRow from './components/Grid/GridRow/GridRow.vue'
import RadioButton from './components/Form/RadioButton/RadioButton.vue'
import SelectInput from './components/Form/SelectInput/SelectInput.vue'
import StatusPill from './components/DataTable/StatusPill/StatusPill.vue'
import TextInput from './components/Form/TextInput/TextInput.vue'
import ToolsHeader from './components/Header/ToolsHeader/ToolsHeader.vue'

export {
  AlertBanner,
  ButtonInput,
  CheckboxInput,
  GridColumn,
  GridContainer,
  GridRow,
  LayoutCard,
  RadioButton,
  SelectInput,
  StatusPill,
  TextInput,
  ToolsHeader
}

export default {
  install (Vue) {
    Vue.component('AlertBanner', AlertBanner)
    Vue.component('ButtonInput', ButtonInput)
    Vue.component('CheckboxInput', CheckboxInput)
    Vue.component('LayoutCard', LayoutCard)
    Vue.component('GridColumn', GridColumn)
    Vue.component('GridContainer', GridContainer)
    Vue.component('GridRow', GridRow)
    Vue.component('RadioButton', RadioButton)
    Vue.component('SelectInput', SelectInput)
    Vue.component('StatusPill', StatusPill)
    Vue.component('TextInput', TextInput)
    Vue.component('ToolsHeader', ToolsHeader)
  }
}
