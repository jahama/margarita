# Grid Nested

```handlebars
<MContainer :fluid="fluid" class="grid-example">
  <MRow :noGutters="noGutters">
    <MCol class="m-col--12 m-col--sm-6 m-col--md-4">
      <div class="content">{{ lorem }}</div>
    </MCol>
    <MCol class="m-col--12 m-col--sm-6 m-col--md-3">
      <MRow :noGutters="noGutters">
        <MCol>
          <div class="content">{{ lorem.slice(0, 70) }}</div>
        </MCol>
        <MCol v-for="i in 2" class="m-col--12">
          <div class="content">{{ lorem.slice(0, 40) }}</div>
        </MCol>
      </MRow>
    </MCol>
    <MCol class="m-col--12 m-col--sm-6 m-col--md-2">
      <div class="content">{{ lorem.slice(0, 90) }}</div>
    </MCol>
    <MCol class="m-col--12 m-col--sm-6 m-col--md-3">
      <div class="content">{{ lorem.slice(0, 100) }}</div>
    </MCol>
  </MRow>
</MContainer>
```
