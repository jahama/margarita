# Text Input

You can use **TextInput** component as following minimal configuration:

```livescript
<GridColumn class="grid-col--4">
  <TextInput
    label="Field Name"
    value="Property value"
  />
</GridColumn>
```

### Required props are:

- **label** <code>String</code>: The label for the form input.
- **value** <code>String, Number</code>: The binded value. You can send v-model instead, and `v-on:input` will be the v-model default behavior.

### TextInput allows you to use the next configuration fields:

- <code>String</code> **id**: Id for the input.
- <code>Boolean</code> **hasError**: Defines if input is errored. Adds styles and shows the error message.
- <code>String</code> **errorMessage**: A String that defines de error message (not shown if `hasError` is `false`).
- <code>String</code> **type**: The input HTML `type`.
- <code>Boolean</code> **disabled**: Sets the disabled status for the input.

### Events:

You can listen `blur`, `input` and `change` input events directly listening these events from the parent.
