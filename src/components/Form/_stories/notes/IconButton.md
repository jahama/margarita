# Icon Button

You can use **Icon Button** component as following minimal configuration:

```handlebars
<IconButton
  icon="download-contract"
  iconAlt="download contract icon"
  type="primary"
  rounded
  :size="60"
  href="https://www.holaluz.com/"
  tag="a"
/>`
```

### Required props are:

- **icon** <kbd>String</kbd>: Available icons are showed in the component's const `AVAILABLE_ICONS`.
- **type** <kbd>String</kbd>: Available icons are showed in the component's const `AVAILABLE_TYPES`. Default value is `primary`.

### IconButton allows you to use the next configuration fields:

- <kbd>String</kbd> **size**: Height size for the icon button. Defaul value is `50`.
- <kbd>Boolean</kbd> **rounded**: It defines if it's a rounded button or not. Defaul value is `false`.
- <kbd>String</kbd> **iconAlt**: It defines icon's alt property for accessibility.
- <kbd>String</kbd> **href**: It defines the button's href tag.
- <kbd>String</kbd> **tag**: It defines if the component is a `button` or a `a` html tag. Defaul value is `button`.

### Event:

You can listen `click` event directly listening this event from the parent.
