# Text Input

You can use **TextInput** component as following minimal configuration:

```handlebars
<GridColumn class="grid-col--4">
  <TextInput
    label="Field Name"
    value="Property value"
  />
</GridColumn>
```

### Required props are:

- **label** <kbd>String</kbd>: The label for the form input.
- **value** <kbd>String, Number</kbd>: The binded value. You can send v-model instead, and `v-on:input` will be the v-model default behavior.

### TextInput allows you to use the next configuration fields:

- <kbd>String</kbd> **id**: Id for the input.
- <kbd>Boolean</kbd> **hasError**: Defines if input is errored. Adds styles and shows the error message.
- <kbd>String</kbd> **errorMessage**: A String that defines de error message (not shown if `hasError` is `false`).
- <kbd>String</kbd> **type**: The input HTML `type`.
- <kbd>Boolean</kbd> **disabled**: Sets the disabled status for the input.

### Events:

You can listen `blur`, `input` and `change` input events directly listening these events from the parent.
