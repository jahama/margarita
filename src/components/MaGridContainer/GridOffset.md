# Offset

Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application layout precisely to your needs.

```livescript
<ma-grid-container class="grid-example">
  <ma-grid-row>
    <ma-grid-column class="grid-col--10 grid-col--offset-2">
      <div class="content">grid-col--10 grid-col--offset-2</div>
    </ma-grid-column>
    <ma-grid-column class="grid-col--4 grid-col--offset-5 grid-col--md-offset-3">
      <div class="content">grid-col--4 grid-col--(offset-5 | md-offset-3)</div>
    </ma-grid-column>
    <ma-grid-column class="grid-col--12 grid-col--md-4 grid-col--md-offset-1">
      <div class="content">grid-col--12 grid-col--md-4 grid-col--md-offset-1</div>
    </ma-grid-column>
    <ma-grid-column class="grid-col--12 grid-col--sm-6 grid-col--md-7 grid-col--sm-offset-1">
      <div class="content">grid-col--12 grid-col--(sm-6 | md-7) grid-col--sm-offset-1</div>
    </ma-grid-column>
  </ma-grid-row>
</ma-grid-container>
```
