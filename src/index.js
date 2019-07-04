import Alert from './components/Alert'
import Button from './components/Button'
import Card from './components/Card'
import Checkbox from './components/Checkbox'
import DataGrid from './components/DataGrid'
import GridColumn from './components/GridColumn'
import GridContainer from './components/GridContainer'
import GridRow from './components/GridRow'
import Icon from './components/Icon'
import PaginationBar from './components/PaginationBar'
import Pill from './components/Pill'
import Radio from './components/Radio'
import Range from './components/Range'
import Select from './components/Select'
import Sidebar from './components/Sidebar'
import Input from './components/Input'

export {
  Alert,
  Button,
  Card,
  Checkbox,
  DataGrid,
  GridColumn,
  GridContainer,
  GridRow,
  Icon,
  PaginationBar,
  Pill,
  Radio,
  Range,
  Select,
  Sidebar,
  Input,
}

function install(Vue) {
  Vue.component('ma-alert', Alert)
  Vue.component('ma-button', Button)
  Vue.component('ma-card', Card)
  Vue.component('ma-checkbox', Checkbox)
  Vue.component('ma-dataGrid', DataGrid)
  Vue.component('ma-grid-column', GridColumn)
  Vue.component('ma-grid-container', GridContainer)
  Vue.component('ma-grid-row', GridRow)
  Vue.component('ma-icon', Icon)
  Vue.component('ma-pagination-bar', PaginationBar)
  Vue.component('ma-pill', Pill)
  Vue.component('ma-radio', Radio)
  Vue.component('ma-range', Range)
  Vue.component('ma-select', Select)
  Vue.component('ma-sidebar', Sidebar)
  Vue.component('ma-input', Input)
}

export default { install }
