# Grid Offset

```handlebars
<MContainer :fluid="fluid" class="grid-example">
  <MRow :noGutters="noGutters">
    <MCol class="m-col--10 m-col--offset-1">
      <div class="content">m-col--10 m-col--offset-1</div>
    </MCol>
    <MCol class="m-col--7 m-col--offset-5 m-col--md-offset-2 m-col--lg-offset-5">
      <div class="content">m-col--7 m-col--(5 | md-offset-2 | lg-offset-5)</div>
    </MCol>
    <MCol class="m-col--12 m-col--sm-5 m-col--md-3">
      <div class="content">m-col--12 m-col--(sm-5 | md-3)</div>
    </MCol>
    <MCol class="m-col--12 m-col--sm-5 m-col--md-5">
      <div class="content">m-col--12 m-col--(sm-5 | md-5) m-col--lg-offset-2</div>
    </MCol>
  </MRow>
</MContainer>
```
