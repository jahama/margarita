import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import DataGridNotes from './notes/DataGrid.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import DataGrid from '../DataGrid/DataGrid'
import StatusPill from '../StatusPill/StatusPill'

const columns = [
  {
    title: 'Name',
    value: 'name',
    sortable: true
  },
  {
    title: 'Age',
    value: 'age',
    sortable: true
  },
  {
    title: 'Status',
    value: 'status'
  }
]

const dataSample = [
  {
    name: 'Anna',
    age: 30,
    status: {
      component: StatusPill,
      componentData: {
        color: 'green',
        text: 'success'
      }
    }
  }, {
    name: 'Biel',
    age: 31,
    status: {
      component: StatusPill,
      componentData: {
        color: 'red',
        text: 'error'
      }
    }
  }, {
    name: 'Carlos',
    age: 29,
    status: {
      component: StatusPill,
      componentData: {
        color: 'red',
        text: 'error'
      }
    }
  }, {
    name: 'Marina',
    age: 23,
    status: {
      component: StatusPill,
      componentData: {
        color: 'orange',
        text: 'warning'
      }
    }
  }, {
    name: 'Estela',
    age: 36,
    status: {
      component: StatusPill,
      componentData: {
        color: 'orange',
        text: 'warning'
      }
    }
  }
]

storiesOf('Components', module)
  .addDecorator(withKnobs)

  .add('DataGrid', withMarkdownNotes(DataGridNotes)(() => {
    return ({
      components: {
        DataGrid,
        GridColumn
      },

      template: `
        <GridColumn>
          <DataGrid
            :columns="columns"
            :data="dataSample"
            @sort="sortBy"
          />
        </GridColumn>`,

      data () {
        return {
          columns,
          dataSample
        }
      },

      methods: {
        sortBy (key) {
          const sortBy = key.column.value
          const sortDirection = key.dir

          this.dataSample.sort(this.dynamicSort(sortBy, sortDirection))
        },

        dynamicSort (key, sortDirection) {
          let sortOrder = 1
          if (sortDirection === 'DESC') {
            sortOrder = -1
          }
          return function (a, b) {
            let result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0
            return result * sortOrder
          }
        }
      }
    })
  }))
