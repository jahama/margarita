# Button Input

You can use **Button Input** component as following minimal configuration:

In the case you want a **text only button**:
```handlebars
<ButtonInput
  text="Esto es un link"
  type="gradient"
  href="https://www.holaluz.com/"
/>
```

In the case you want an **icon only button**:
```handlebars
<ButtonInput
  icon="DownloadContract"
  icon-alt="download contract icon"
  rounded
  :icon-size="50"
  type="secondary"
  href="https://www.holaluz.com/"
/>
```

In the case you want a **text with icon button**:
```handlebars
<ButtonInput
  text="Esto es un texto con icono"
  icon="DownloadContract"
  icon-alt="download contract icon"
  href="https://www.holaluz.com/"
/>
```

In the case you want a **text only link**:
```handlebars
<ButtonInput
  text="Esto es un link"
  type="no-background"
  href="https://www.holaluz.com/"
  tag="a"
/>
```

### Props are:

- <kbd>String</kbd> **type**: Available types are showed in the component's const `AVAILABLE_TYPES`. Default value is `primary`.
- <kbd>String</kbd> **icon**: Available icons are showed in the component's const `AVAILABLE_ICONS`.
- <kbd>String</kbd> **text**: Any string.
- <kbd>String</kbd> **size**: Height size for the icon button. Defaul value is `50`.
- <kbd>Boolean</kbd> **rounded**: It defines if it's a rounded button or not. Defaul value is `false`.
- <kbd>String</kbd> **iconAlt**: It defines icon's alt property for accessibility.
- <kbd>String</kbd> **href**: It defines the button's href tag.
- <kbd>String</kbd> **tag**: It defines if the component is a `button` or a `a` html tag. Defaul value is `button`.

### Event:

You can listen `click` event directly listening this event from the parent.
