# Range Input

You can use **RangeInput** component as following minimal configuration:

```handlebars
<GridColumn class="grid-col--4">
  <RangeInput
    v-model="someValue"
    :steps="steps"
  />
</GridColumn>
```

### Required props are:

- **value** <kbd>String</kbd>: The binded value. You can send v-model instead, and `v-on:input` will be the v-model default behavior.
- **steps** <kbd>Array</kbd>: The list of ranges. Every element must contain `value` and `text` keys.


### Events:

You can listen the `input` event directly listening these events from the parent.
