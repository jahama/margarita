# Button Input

You can use **Button Input** component as following minimal configuration:

In the case you want a **text only button**:
```livescript
<button-input
  category="gradient"
>
This is a button with text only
</ButtonInput>
```

In the case you want an **icon only button**:
```livescript
<button-input
  aria-label="Download PDF"
  rounded
  category="secondary"
>
  <icon-base
    icon="DownloadContract"
    width="50"
    height="50"
  />
</ButtonInput>
```

In the case you want a **text with icon button**:
```livescript
<button-input>
  This is a button with text and icon
  <icon-base
    icon="Arrow"
  />
</ButtonInput>
```

In the case you want a **text and icon link**:
```livescript
<button-input
  category="no-background"
  href="https://www.holaluz.com/"
  tag="a"
>
  This is a link with text and icon
  <icon-base
    icon="Exit"
  />
</ButtonInput>
```

### Props are:

- <code>String</code> **category**: Available categories are showed in the component's const `AVAILABLE_CATEGORIES`. Default value is `primary`.
- <code>Boolean</code> **loading**: It defines if the button is loading. Defaul value is `false`.
- <code>Boolean</code> **rounded**: It defines if it's a rounded button or not. Defaul value is `false`.
- <code>Boolean</code> **fluid**: It defines if it's a fluid button or not. Defaul value is `false`.
- <code>String</code> **aria-label**: It defines an aria-label when a button has only an icon inside for accessibility.
- <code>String</code> **href**: It defines the button's href tag.
- <code>String</code> **tag**: It defines if the component is a `button` or a `a` html tag. Defaul value is `button`.

### Slot can be:
- <code>Text</code>
- <code>IconBase</code>: Component for adding icons.

### Event:

You can listen `click` event directly listening this event from the parent.
