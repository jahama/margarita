<style lang="scss" src="./DataGrid.scss"></style>

<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.title"
          :class="sortClass(column.value, column.sortable)"
          @click="sort(column)"
        >
          <span class="column-title">{{ column.title }}</span>
          <span
            v-if="column.sortable"
            class="sort-arrow"
          />
        </th>
      </tr>
    </thead>
    <tbody v-if="isLoading">
      <tr
        v-for="index in 3"
        :key="index"
        class="datagrid__row--loader"
      >
        <td
          v-for="column in columns"
          :key="column.title"
        >
          <DataGridLoader />
        </td>
      </tr>
    </tbody>
    <tbody
      v-else
      class="datagrid--shadow"
    >
      <tr
        v-for="item in data"
        :key="item.id"
      >
        <td
          v-for="rowCell in item"
          :key="rowCell.keyValue"
        >
          <span
            :is="rowCell.component"
            v-if="rowCell.component"
            v-bind="rowCell.componentData"
          />
          <span
            v-else
            v-text="rowCell"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import DataGridLoader from './loader/DataGridLoader'

export default {
  name: 'DataGrid',

  components: {
    DataGridLoader
  },

  props: {
    data: {
      type: Array,
      required: true
    },

    columns: {
      type: Array,
      required: true
    },

    isLoading: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      currentSort: '',
      currentSortDir: 'ASC'
    }
  },

  methods: {
    sort (column) {
      if (!column.sortable) return
      if (column === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'ASC' ? 'DESC' : 'ASC'
      } else {
        this.currentSort = column
        this.currentSortDir = 'ASC'
      }
      this.$emit('sort', { column: this.currentSort, dir: this.currentSortDir })
    },

    sortClass (value, isSortable) {
      let sortableClass = ''
      if (isSortable) {
        sortableClass = 'sort-cursor-pointer'
      }

      if (this.currentSort.value === value) {
        return `sort-arrow--${this.currentSortDir.toLowerCase()} ${sortableClass}`
      }

      return `sort-arrow--unsorted ${sortableClass}`
    }
  }
}
</script>
