import AlertBanner from './components/AlertBanner'
import ButtonInput from './components/ButtonInput'
import CheckboxInput from './components/CheckboxInput'
import DataGrid from './components/DataGrid'
import GridColumn from './components/GridColumn'
import GridContainer from './components/GridContainer'
import GridRow from './components/GridRow'
import IconBase from './components/IconBase'
import LayoutCard from './components/LayoutCard'
import PaginationBar from './components/PaginationBar'
import RadioButton from './components/RadioButton'
import RangeInput from './components/RangeInput'
import SelectInput from './components/SelectInput'
import SidebarDrawer from './components/SidebarDrawer'
import StatusPill from './components/StatusPill'
import TextInput from './components/TextInput'

export {
  AlertBanner,
  ButtonInput,
  CheckboxInput,
  DataGrid,
  GridColumn,
  GridContainer,
  GridRow,
  IconBase,
  LayoutCard,
  PaginationBar,
  RadioButton,
  RangeInput,
  SelectInput,
  SidebarDrawer,
  StatusPill,
  TextInput,
}

function install(Vue) {
  Vue.component('AlertBanner', AlertBanner)
  Vue.component('ButtonInput', ButtonInput)
  Vue.component('CheckboxInput', CheckboxInput)
  Vue.component('DataGrid', DataGrid)
  Vue.component('GridColumn', GridColumn)
  Vue.component('GridContainer', GridContainer)
  Vue.component('GridRow', GridRow)
  Vue.component('IconBase', IconBase)
  Vue.component('LayoutCard', LayoutCard)
  Vue.component('PaginationBar', PaginationBar)
  Vue.component('RadioButton', RadioButton)
  Vue.component('RangeInput', RangeInput)
  Vue.component('SelectInput', SelectInput)
  Vue.component('SidebarDrawer', SidebarDrawer)
  Vue.component('StatusPill', StatusPill)
  Vue.component('TextInput', TextInput)
}

export default { install }
