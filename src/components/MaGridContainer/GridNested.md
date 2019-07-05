# Nested grid

Grids can be nested, similar to other frameworks, in order to achieve very custom layouts.

```livescript
<ma-grid-container class="grid-example">
  <ma-grid-row>
    <ma-grid-column class="ma-grid-col--12 ma-grid-col--sm-6 ma-grid-col--md-4">
      <div class="content">{{ lorem }}</div>
    </ma-grid-column>
    <ma-grid-column class="ma-grid-col--12 ma-grid-col--sm-6 ma-grid-col--md-3">
      <ma-grid-row>
        <ma-grid-column>
          <div class="content">{{ lorem.slice(0, 70) }}</div>
        </ma-grid-column>
        <ma-grid-column v-for="i in 2" :key="i" class="ma-grid-col--12">
          <div class="content">{{ lorem.slice(0, 40) }}</div>
        </ma-grid-column>
      </ma-grid-row>
    </ma-grid-column>
    <ma-grid-column class="ma-grid-col--12 ma-grid-col--sm-6 ma-grid-col--md-2">
      <div class="content">{{ lorem.slice(0, 90) }}</div>
    </ma-grid-column>
    <ma-grid-column class="ma-grid-col--12 ma-grid-col--sm-6 ma-grid-col--md-3">
      <div class="content">{{ lorem.slice(0, 100) }}</div>
    </ma-grid-column>
  </ma-grid-row>
</ma-grid-container>
```
