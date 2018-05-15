# Grid System

```handlebars
<MContainer :fluid="fluid" class="grid-example">
  <MRow>
    <MColumn v-for="col in 1" :key="col" class="m-column--12">
      <div>12</div>
    </MColumn>
  </MRow>
  <MRow>
    <MColumn v-for="col in 2" :key="col" class="m-column--6">
      <div>6</div>
    </MColumn>
  </MRow>
  <MRow>
    <MColumn v-for="col in 3" :key="col" class="m-column--4">
      <div>4</div>
    </MColumn>
  </MRow>
  <MRow>
    <MColumn v-for="col in 4" :key="col" class="m-column--3">
      <div>3</div>
    </MColumn>
  </MRow>
  <MRow>
    <MColumn v-for="col in 6" :key="col" class="m-column--2">
      <div>2</div>
    </MColumn>
  </MRow>
  <MRow>
    <MColumn v-for="col in 12" :key="col" class="m-column--1">
      <div>1</div>
    </MColumn>
  </MRow>
</MContainer>
```
