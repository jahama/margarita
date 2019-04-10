# Order

You can control the ordering of grid items. As with offsets, you can set different orders for different sizes. Design specialized screen layouts that accommodate to any application.

```livescript
<grid-container class="grid-example">
  <grid-row>
    <grid-column class="grid-col--6 grid-col--lg-order-2">
      <div class="content">#1</div>
    </grid-column>
    <grid-column class="grid-col--6">
      <div class="content">#2</div>
    </grid-column>
  </grid-row>
  <grid-row>
    <grid-column class="grid-col--4 grid-col--md-order-2 grid-col--order-1">
      <div class="content">#1</div>
    </grid-column>
    <grid-column class="grid-col--4 grid-col--md-order-3 grid-col--order-2">
      <div class="content">#2</div>
    </grid-column>
    <grid-column class="grid-col--4 grid-col--md-order-1 grid-col--order-3">
      <div class="content">#3</div>
    </grid-column>
  </grid-row>
  <grid-row>
    <grid-column class="grid-col--12 grid-col--sm-6 grid-col--md-3 grid-col--md-order-4 grid-col--sm-order-2">
      <div class="content">#1</div>
    </grid-column>
    <grid-column class="grid-col--12 grid-col--sm-6 grid-col--md-3 grid-col--md-order-3 grid-col--sm-order-1">
      <div class="content">#2</div>
    </grid-column>
    <grid-column class="grid-col--12 grid-col--sm-6 grid-col--md-3 grid-col--md-order-2 grid-col--sm-order-4">
      <div class="content">#3</div>
    </grid-column>
    <grid-column class="grid-col--12 grid-col--sm-6 grid-col--md-3 grid-col--md-order-1 grid-col--sm-order-3">
      <div class="content">#4</div>
    </grid-column>
  </grid-row>
</grid-container>
```
