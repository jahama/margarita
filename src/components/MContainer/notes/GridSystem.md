# Grid System

Margarita has a 12 point grid system. Built using <kbd>flex-box</kbd>, the grid is used to layout an application’s content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations. The props for grid components are actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props, while still providing the classes to be used anywhere.

## Usage

The `m-container` can be used for a center focused page, or given the `fluid` prop to extend its full width. `m-row` is used for separating sections and contains the `m-col`. The structure of your layout will be as follows, **m-container » m-row » m-col**. Each part of the grid chain is a `flex-box` element. The final, `m-col`, automatically sets its children to have <kbd>flex: 1 1 auto</kbd>.

```handlebars
<MContainer :fluid="fluid" class="grid-example">
  <MRow>
    <MCol v-for="col in 1" :key="col" class="m-col--12">
      <div>12</div>
    </MCol>
  </MRow>
  <MRow>
    <MCol v-for="col in 2" :key="col" class="m-col--6">
      <div>6</div>
    </MCol>
  </MRow>
  <MRow>
    <MCol v-for="col in 3" :key="col" class="m-col--4">
      <div>4</div>
    </MCol>
  </MRow>
  <MRow>
    <MCol v-for="col in 4" :key="col" class="m-col--3">
      <div>3</div>
    </MCol>
  </MRow>
  <MRow>
    <MCol v-for="col in 6" :key="col" class="m-col--2">
      <div>2</div>
    </MCol>
  </MRow>
  <MRow>
    <MCol v-for="col in 12" :key="col" class="m-col--1">
      <div>1</div>
    </MCol>
  </MRow>
</MContainer>
```

Col Types
- Auto (size from content)
- Nothing (fill width)
- Breakpoints
