# Grid Nested

```handlebars
<MContainer :fluid="fluid" class="grid-example">
  <MRow :noGutters="noGutters">
    <MColumn class="m-column--12 m-column--sm-6 m-column--md-4">
      <div class="content">{{ lorem }}</div>
    </MColumn>
    <MColumn class="m-column--12 m-column--sm-6 m-column--md-3">
      <MRow :noGutters="noGutters">
        <MColumn>
          <div class="content">{{ lorem.slice(0, 70) }}</div>
        </MColumn>
        <MColumn v-for="i in 2" class="m-column--12">
          <div class="content">{{ lorem.slice(0, 40) }}</div>
        </MColumn>
      </MRow>
    </MColumn>
    <MColumn class="m-column--12 m-column--sm-6 m-column--md-2">
      <div class="content">{{ lorem.slice(0, 90) }}</div>
    </MColumn>
    <MColumn class="m-column--12 m-column--sm-6 m-column--md-3">
      <div class="content">{{ lorem.slice(0, 100) }}</div>
    </MColumn>
  </MRow>
</MContainer>
```
