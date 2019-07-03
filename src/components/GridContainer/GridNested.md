# Nested grid

Grids can be nested, similar to other frameworks, in order to achieve very custom layouts.

```livescript
<grid-container class="grid-example">
  <grid-row>
    <grid-column class="grid-col--12 grid-col--sm-6 grid-col--md-4">
      <div class="content">{{ lorem }}</div>
    </grid-column>
    <grid-column class="grid-col--12 grid-col--sm-6 grid-col--md-3">
      <grid-row>
        <grid-column>
          <div class="content">{{ lorem.slice(0, 70) }}</div>
        </grid-column>
        <grid-column v-for="i in 2" :key="i" class="grid-col--12">
          <div class="content">{{ lorem.slice(0, 40) }}</div>
        </grid-column>
      </grid-row>
    </grid-column>
    <grid-column class="grid-col--12 grid-col--sm-6 grid-col--md-2">
      <div class="content">{{ lorem.slice(0, 90) }}</div>
    </grid-column>
    <grid-column class="grid-col--12 grid-col--sm-6 grid-col--md-3">
      <div class="content">{{ lorem.slice(0, 100) }}</div>
    </grid-column>
  </grid-row>
</grid-container>
```
