# Form grid

Grids can be used for forms, in this case we should only add `form` to the GridContainer tag.

We will get a 24px bottom margin to all columns inside a grid-row.
Since we don't want that bottom margin in the last row we will add `no-margin-bottom` to the GridRow tag. This will delete the margin bottom for the last row and it'll also work properly in the responsive way.

We are able to also add `has-margin-top` to the GridRow tag. This will add a 24px margin top in all columns of the row where it's applied.


## Final Example

```handlebars
<GridContainer form>
  <LayoutCard>
    <GridRow>
      <GridColumn class="grid-col--12 grid-col--md-4">
        <TextInput
          :label="'Mobile col-12, Desktop col-4'"
        />
      </GridColumn>
      <GridColumn class="grid-col--12 grid-col--md-4">
        <SelectInput
          :label="'Mobile col-12, Desktop col-4'"
        />
      </GridColumn>
      <GridColumn class="grid-col--12 grid-col--md-4">
        <TextInput
          :label="'Mobile col-12, Desktop col-4'"
        />
      </GridColumn>
    </GridRow>
    <GridRow no-margin-bottom>
      <GridColumn class="grid-col--12 grid-col--md-3">
        <TextInput
          :label="'Mobile col-12, Desktop col-3'"
        />
      </GridColumn>
      <GridColumn class="grid-col--6 grid-col--md-5">
        <SelectInput
          :label="'Mobile col-6, Desktop col-5'"
        />
      </GridColumn>
      <GridColumn class="grid-col--6 grid-col--md-4">
        <TextInput
          :label="'Mobile col-6, Desktop col-4'"
        />
      </GridColumn>
    </GridRow>
  </LayoutCard>
</GridContainer>
```
