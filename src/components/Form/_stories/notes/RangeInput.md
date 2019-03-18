# Range Input

You can use **RangeInput** component as following minimal configuration:

```jsx
<GridColumn class="grid-col--4">
  <RangeInput
    v-model="someValue"
    :steps="steps"
  />
</GridColumn>
```

### Required props are:

- **value** <code>String</code>: The binded value. You can send v-model instead, and `v-on:input` will be the v-model default behavior.
- **steps** <code>Array</code>: The list of ranges. Every element must contain `value` and `text` keys.

### Range Input allows you to use the following optionals fields:

- <code>String</code> **label**: Label for the input.


### Events:

You can listen the `input` event directly listening these events from the parent.
