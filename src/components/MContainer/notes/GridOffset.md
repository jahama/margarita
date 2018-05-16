# Offset

Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application layout precisely to your needs.

```handlebars
<MContainer class="grid-example">
  <MRow>
    <MCol class="m-col--10 m-col--offset-2">
      <div class="content">m-col--10 m-col--offset-2</div>
    </MCol>
    <MCol class="m-col--4 m-col--offset-5 m-col--md-offset-3">
      <div class="content">m-col--4 m-col--(offset-5 | md-offset-3)</div>
    </MCol>
    <MCol class="m-col--12 m-col--md-4 m-col--offset-1">
      <div class="content">m-col--12 m-col--md-4 m-col--offset-1</div>
    </MCol>
    <MCol class="m-col--12 m-col--sm-6 m-col--md-7 m-col--md-offset-1">
      <div class="content">m-col--12 m-col--(sm-6 | md-7) m-col--md-offset-1</div>
    </MCol>
  </MRow>
</MContainer>
```
