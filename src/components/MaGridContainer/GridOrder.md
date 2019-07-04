# Order

You can control the ordering of grid items. As with offsets, you can set different orders for different sizes. Design specialized screen layouts that accommodate to any application.

```livescript
<ma-grid-container class="grid-example">
  <ma-grid-row>
    <ma-grid-column class="ma-grid-col--6 ma-grid-col--lg-order-2">
      <div class="content">#1</div>
    </ma-grid-column>
    <ma-grid-column class="ma-grid-col--6">
      <div class="content">#2</div>
    </ma-grid-column>
  </ma-grid-row>
  <ma-grid-row>
    <ma-grid-column class="ma-grid-col--4 ma-grid-col--md-order-2 ma-grid-col--order-1">
      <div class="content">#1</div>
    </ma-grid-column>
    <ma-grid-column class="ma-grid-col--4 ma-grid-col--md-order-3 ma-grid-col--order-2">
      <div class="content">#2</div>
    </ma-grid-column>
    <ma-grid-column class="ma-grid-col--4 ma-grid-col--md-order-1 ma-grid-col--order-3">
      <div class="content">#3</div>
    </ma-grid-column>
  </ma-grid-row>
  <ma-grid-row>
    <ma-grid-column class="ma-grid-col--12 ma-grid-col--sm-6 ma-grid-col--md-3 ma-grid-col--md-order-4 ma-grid-col--sm-order-2">
      <div class="content">#1</div>
    </ma-grid-column>
    <ma-grid-column class="ma-grid-col--12 ma-grid-col--sm-6 ma-grid-col--md-3 ma-grid-col--md-order-3 ma-grid-col--sm-order-1">
      <div class="content">#2</div>
    </ma-grid-column>
    <ma-grid-column class="ma-grid-col--12 ma-grid-col--sm-6 ma-grid-col--md-3 ma-grid-col--md-order-2 ma-grid-col--sm-order-4">
      <div class="content">#3</div>
    </ma-grid-column>
    <ma-grid-column class="ma-grid-col--12 ma-grid-col--sm-6 ma-grid-col--md-3 ma-grid-col--md-order-1 ma-grid-col--sm-order-3">
      <div class="content">#4</div>
    </ma-grid-column>
  </ma-grid-row>
</ma-grid-container>
```
