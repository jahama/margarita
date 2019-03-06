# Button Input

You can use **Button Input** component as following minimal configuration:

In the case you want a **text only button**:
```handlebars
<ButtonInput
  category="gradient"
>
This is a button with text only
</ButtonInput>
```

In the case you want an **icon only button**:
```handlebars
<ButtonInput
  aria-label="Download PDF"
  rounded
  category="secondary"
>
  <IconBase
    icon="DownloadContract"
    width="50"
    height="50"
  />
</ButtonInput>
```

In the case you want a **text with icon button**:
```handlebars
<ButtonInput>
  This is a button with text and icon
  <IconBase
    icon="Arrow"
  />
</ButtonInput>
```

In the case you want a **text and icon link**:
```handlebars
<ButtonInput
  category="no-background"
  href="https://www.holaluz.com/"
  tag="a"
>
  This is a link with text and icon
  <IconBase
    icon="Exit"
  />
</ButtonInput>
```

### Props are:

- <kbd>String</kbd> **category**: Available categories are showed in the component's const `AVAILABLE_CATEGORIES`. Default value is `primary`.
- <kbd>Boolean</kbd> **loading**: It defines if the button is loading. Defaul value is `false`.
- <kbd>Boolean</kbd> **rounded**: It defines if it's a rounded button or not. Defaul value is `false`.
- <kbd>Boolean</kbd> **fluid**: It defines if it's a fluid button or not. Defaul value is `false`.
- <kbd>String</kbd> **aria-label**: It defines an aria-label when a button has only an icon inside for accessibility.
- <kbd>String</kbd> **href**: It defines the button's href tag.
- <kbd>String</kbd> **tag**: It defines if the component is a `button` or a `a` html tag. Defaul value is `button`.

### Slot can be:
- <kbd>Text</kbd>
- <kbd>IconBase</kbd>: Component for adding icons.

### Event:

You can listen `click` event directly listening this event from the parent.
