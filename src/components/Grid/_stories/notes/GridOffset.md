# Offset

Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application layout precisely to your needs.

```jsx
<GridContainer class="grid-example">
  <GridRow>
    <GridColumn class="grid-col--10 grid-col--offset-2">
      <div class="content">grid-col--10 grid-col--offset-2</div>
    </GridColumn>
    <GridColumn class="grid-col--4 grid-col--offset-5 grid-col--md-offset-3">
      <div class="content">grid-col--4 grid-col--(offset-5 | md-offset-3)</div>
    </GridColumn>
    <GridColumn class="grid-col--12 grid-col--md-4 grid-col--md-offset-1">
      <div class="content">grid-col--12 grid-col--md-4 grid-col--md-offset-1</div>
    </GridColumn>
    <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-7 grid-col--sm-offset-1">
      <div class="content">grid-col--12 grid-col--(sm-6 | md-7) grid-col--sm-offset-1</div>
    </GridColumn>
  </GridRow>
</GridContainer>
```
