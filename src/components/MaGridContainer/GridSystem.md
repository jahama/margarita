# Grid System

Margarita has a 12 point grid system. Built using <code>flex-box</code>, the grid is used to layout an application’s content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations. The props for grid components are actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props, while still providing the classes to be used anywhere.

## Usage

The `grid-container` can be used for a center focused page, or given the `fluid` prop to extend its full width. `grid-row` is used for separating sections and contains the `grid-col`. The structure of your layout will be as follows, **grid-container >> grid-row >> grid-col**. Each part of the grid chain is a `flex-box` element. The final, `grid-col`, automatically sets its children to have <code>flex: 1 1 auto</code>.

```livescript
<ma-grid-container class="grid-example">
  <ma-grid-row>
    <ma-grid-column v-for="col in 1" :key="col" class="grid-col--12">
      <div class="content">12</div>
    </ma-grid-column>
  </ma-grid-row>
  <ma-grid-row>
    <ma-grid-column v-for="col in 2" :key="col" class="grid-col--6">
      <div class="content">6</div>
    </ma-grid-column>
  </ma-grid-row>
  <ma-grid-row>
    <ma-grid-column v-for="col in 3" :key="col" class="grid-col--4">
      <div class="content">4</div>
    </ma-grid-column>
  </ma-grid-row>
  <ma-grid-row>
    <ma-grid-column v-for="col in 4" :key="col" class="grid-col--3">
      <div class="content">3</div>
    </ma-grid-column>
  </ma-grid-row>
  <ma-grid-row>
    <ma-grid-column v-for="col in 6" :key="col" class="grid-col--2">
      <div class="content">2</div>
    </ma-grid-column>
  </ma-grid-row>
  <ma-grid-row>
    <ma-grid-column v-for="col in 12" :key="col" class="grid-col--1">
      <div class="content">1</div>
    </ma-grid-column>
  </ma-grid-row>
</ma-grid-container>
```
