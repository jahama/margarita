# Nested grid

Grids can be nested, similar to other frameworks, in order to achieve very custom layouts.

```jsx
<GridContainer class="grid-example">
  <GridRow>
    <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-4">
      <div class="content">{{ lorem }}</div>
    </GridColumn>
    <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-3">
      <GridRow>
        <GridColumn>
          <div class="content">{{ lorem.slice(0, 70) }}</div>
        </GridColumn>
        <GridColumn v-for="i in 2" :key="i" class="grid-col--12">
          <div class="content">{{ lorem.slice(0, 40) }}</div>
        </GridColumn>
      </GridRow>
    </GridColumn>
    <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-2">
      <div class="content">{{ lorem.slice(0, 90) }}</div>
    </GridColumn>
    <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-3">
      <div class="content">{{ lorem.slice(0, 100) }}</div>
    </GridColumn>
  </GridRow>
</GridContainer>
```
