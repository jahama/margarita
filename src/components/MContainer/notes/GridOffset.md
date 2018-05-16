# Grid Offset

```handlebars
<MContainer :fluid="fluid" class="grid-example">
  <MRow :noGutters="noGutters">
    <MColumn class="m-column--10 m-column--offset-1">
      <div class="content">m-column--10 m-column--offset-1</div>
    </MColumn>
    <MColumn class="m-column--7 m-column--offset-5 m-column--md-offset-2 m-column--lg-offset-5">
      <div class="content">m-column--7 m-column--(5 | md-offset-2 | lg-offset-5)</div>
    </MColumn>
    <MColumn class="m-column--12 m-column--sm-5 m-column--md-3">
      <div class="content">m-column--12 m-column--(sm-5 | md-3)</div>
    </MColumn>
    <MColumn class="m-column--12 m-column--sm-5 m-column--md-5">
      <div class="content">m-column--12 m-column--(sm-5 | md-5) m-column--lg-offset-2</div>
    </MColumn>
  </MRow>
</MContainer>
```
