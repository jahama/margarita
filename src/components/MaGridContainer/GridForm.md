# Form grid

Grids can be used for forms, in this case we should only add `form` to the GridContainer tag.

We will get a 24px bottom margin to all columns inside a grid-col.
Since we don't want that bottom margin in the last row we will add `no-margin-bottom` to the GridRow tag. This will delete the margin bottom for the last row and it'll also work properly in the responsive way.

We are able to also add `has-margin-top` to the GridRow tag. This will add a 24px margin top in all columns of the row where it's applied.


## Final Example

```livescript
<ma-grid-container form>
  <ma-card>
    <ma-grid-row>
      <ma-grid-column class="ma-grid-col--12 ma-grid-col--md-4">
        <ma-text
          :label="'Mobile col-12, Desktop col-4'"
        />
      </ma-grid-column>
      <ma-grid-column class="ma-grid-col--12 ma-grid-col--md-4">
        <select-input
          :label="'Mobile col-12, Desktop col-4'"
        />
      </ma-grid-column>
      <ma-grid-column class="ma-grid-col--12 ma-grid-col--md-4">
        <ma-text
          :label="'Mobile col-12, Desktop col-4'"
        />
      </ma-grid-column>
    </ma-grid-row>
    <ma-grid-row no-margin-bottom>
      <ma-grid-column class="ma-grid-col--12 ma-grid-col--md-3">
        <ma-text
          :label="'Mobile col-12, Desktop col-3'"
        />
      </ma-grid-column>
      <ma-grid-column class="ma-grid-col--6 ma-grid-col--md-5">
        <select-input
          :label="'Mobile col-6, Desktop col-5'"
        />
      </ma-grid-column>
      <ma-grid-column class="ma-grid-col--6 ma-grid-col--md-4">
        <ma-text
          :label="'Mobile col-6, Desktop col-4'"
        />
      </ma-grid-column>
    </ma-grid-row>
  </ma-card>
</ma-grid-container>
```
