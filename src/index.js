import MaAlert from './components/MaAlert'
import MaButton from './components/MaButton'
import MaCard from './components/MaCard'
import MaCheckbox from './components/MaCheckbox'
import MaDataGrid from './components/MaDataGrid'
import MaGridColumn from './components/MaGridColumn'
import MaGridContainer from './components/MaGridContainer'
import MaGridRow from './components/MaGridRow'
import MaIcon from './components/MaIcon'
import MaPaginationBar from './components/MaPaginationBar'
import MaPill from './components/MaPill'
import MaRadio from './components/MaRadio'
import MaRange from './components/MaRange'
import MaSelect from './components/MaSelect'
import MaSidebar from './components/MaSidebar'
import MaText from './components/MaText'

export {
  MaAlert,
  MaButton,
  MaCard,
  MaCheckbox,
  MaDataGrid,
  MaGridColumn,
  MaGridContainer,
  MaGridRow,
  MaIcon,
  MaPaginationBar,
  MaPill,
  MaRadio,
  MaRange,
  MaSelect,
  MaSidebar,
  MaText,
}

function install(Vue) {
  Vue.component('ma-alert', MaAlert)
  Vue.component('ma-button', MaButton)
  Vue.component('ma-card', MaCard)
  Vue.component('ma-checkbox', MaCheckbox)
  Vue.component('ma-data-grid', MaDataGrid)
  Vue.component('ma-grid-column', MaGridColumn)
  Vue.component('ma-grid-container', MaGridContainer)
  Vue.component('ma-grid-row', MaGridRow)
  Vue.component('ma-icon', MaIcon)
  Vue.component('ma-pagination-bar', MaPaginationBar)
  Vue.component('ma-pill', MaPill)
  Vue.component('ma-radio', MaRadio)
  Vue.component('ma-range', MaRange)
  Vue.component('ma-select', MaSelect)
  Vue.component('ma-sidebar', MaSidebar)
  Vue.component('ma-text', MaText)
}

export default { install }
