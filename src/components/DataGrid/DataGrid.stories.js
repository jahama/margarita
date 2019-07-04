import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import notes from './DataGrid.md'
import GridColumn from '@margarita/components/GridColumn'
import DataGrid from '../DataGrid/DataGrid'
import Pill from '../Pill/Pill'

const columns = [
  {
    title: 'Name',
    value: 'name',
    sortable: true,
  },
  {
    title: 'Age',
    value: 'age',
    sortable: true,
  },
  {
    title: 'Status',
    value: 'status',
  },
]

const rowsSample = [
  {
    name: 'Anna',
    age: 30,
    status: {
      component: Pill,
      componentData: {
        color: 'green',
        text: 'success',
      },
    },
  },
  {
    name: 'Biel',
    age: 31,
    status: {
      component: Pill,
      componentData: {
        color: 'red',
        text: 'error',
      },
    },
  },
  {
    name: 'Carlos',
    age: 29,
    status: {
      component: Pill,
      componentData: {
        color: 'red',
        text: 'error',
      },
    },
  },
  {
    name: 'Marina',
    age: 23,
    status: {
      component: Pill,
      componentData: {
        color: 'orange',
        text: 'warning',
      },
    },
  },
  {
    name: 'Estela',
    age: 36,
    status: {
      component: Pill,
      componentData: {
        color: 'orange',
        text: 'warning',
      },
    },
  },
]

storiesOf('DataGrid', module)
  .addDecorator(withKnobs)
  .add(
    'DataGrid',
    () => {
      const isLoading = boolean('Loading', false)

      return {
        components: {
          DataGrid,
          GridColumn,
        },

        template: `
        <grid-column>
          <data-grid
            :columns="columns"
            :rows="rowsSample"
            @sort="sortBy"
            :isLoading="isLoading"
          />
        </grid-column>`,

        props: {
          columns: {
            default: columns,
          },
          rowsSample: {
            default: rowsSample,
          },
          isLoading: {
            default: isLoading,
          },
        },

        methods: {
          sortBy(key) {
            const sortBy = key.column.value
            const sortDirection = key.dir

            this.rowsSample.sort(this.dynamicSort(sortBy, sortDirection))
          },

          dynamicSort(key, sortDirection) {
            let sortOrder = 1
            if (sortDirection === 'DESC') {
              sortOrder = -1
            }
            return function(a, b) {
              let result = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
              return result * sortOrder
            }
          },
        },
      }
    },
    { notes }
  )
