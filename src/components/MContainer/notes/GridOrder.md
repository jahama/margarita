# Order

You can control the ordering of grid items. As with offsets, you can set different orders for different sizes. Design specialized screen layouts that accommodate to any application.

```handlebars
<MContainer class="grid-example">
  <MRow>
    <MCol class="m-col--6 m-col--lg-order-2">
      <div class="content">#1</div>
    </MCol>
    <MCol class="m-col--6">
      <div class="content">#2</div>
    </MCol>
  </MRow>
  <MRow>
    <MCol class="m-col--4 m-col--md-order-2 m-col--order-1">
      <div class="content">#1</div>
    </MCol>
    <MCol class="m-col--4 m-col--md-order-3 m-col--order-2">
      <div class="content">#2</div>
    </MCol>
    <MCol class="m-col--4 m-col--md-order-1 m-col--order-3">
      <div class="content">#3</div>
    </MCol>
  </MRow>
  <MRow>
    <MCol class="m-col--12 m-col--sm-6 m-col--md-3 m-col--md-order-4 m-col--sm-order-2">
      <div class="content">#1</div>
    </MCol>
    <MCol class="m-col--12 m-col--sm-6 m-col--md-3 m-col--md-order-3 m-col--sm-order-1">
      <div class="content">#2</div>
    </MCol>
    <MCol class="m-col--12 m-col--sm-6 m-col--md-3 m-col--md-order-2 m-col--sm-order-4">
      <div class="content">#3</div>
    </MCol>
    <MCol class="m-col--12 m-col--sm-6 m-col--md-3 m-col--md-order-1 m-col--sm-order-3">
      <div class="content">#4</div>
    </MCol>
  </MRow>
</MContainer>
```
