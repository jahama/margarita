import AlertBanner from './components/Layout/AlertBanner'
import ButtonInput from './components/Form/ButtonInput'
import CheckboxInput from './components/Form/CheckboxInput'
import DataGrid from './components/Components/DataGrid'
import LayoutCard from './components/Layout/LayoutCard'
import GridColumn from './components/Grid/GridColumn'
import GridContainer from './components/Grid/GridContainer'
import GridRow from './components/Grid/GridRow'
import IconBase from './components/Components/IconBase'
import PaginationBar from './components/Components/PaginationBar'
import RadioButton from './components/Form/RadioButton'
import RangeInput from './components/Form/RangeInput'
import SelectInput from './components/Form/SelectInput'
import StatusPill from './components/Components/StatusPill'
import TextInput from './components/Form/TextInput'
import ToolsHeader from './components/Header/ToolsHeader'
import SidebarDrawer from './components/Layout/SidebarDrawer'

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
  ToolsHeader,
}

function install (Vue) {
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
  Vue.component('ToolsHeader', ToolsHeader)
}

export default { install: install }
