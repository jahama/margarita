import AlertBanner from './components/AlertBanner'
import LayoutCard from './components/LayoutCard'
import SidebarDrawer from './components/SidebarDrawer'
import GridContainer from './components/GridContainer'
import GridColumn from './components/GridColumn'
import GridRow from './components/GridRow'
import ButtonInput from './components/ButtonInput'
import CheckboxInput from './components/CheckboxInput'
import RadioButton from './components/RadioButton'
import RangeInput from './components/RangeInput'
import SelectInput from './components/SelectInput'
import TextInput from './components/TextInput'
import DataGrid from './components/DataGrid'
import IconBase from './components/IconBase'
import PaginationBar from './components/PaginationBar'
import StatusPill from './components/StatusPill'

export {
  AlertBanner,
  ButtonInput,
  CheckboxInput,
  DataGrid,
  LayoutCard,
  GridColumn,
  GridContainer,
  GridRow,
  IconBase,
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
