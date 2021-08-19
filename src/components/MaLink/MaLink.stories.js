import MaLink from '../MaLink'

export default {
  title: 'Components/Link',
  component: MaLink,
  argTypes: {
    category: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'white',
          'gradient',
          'no-background',
          'no-background-white',
        ],
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <ma-link v-bind="$props" target="_blank">Hi! I'm a link</ma-link>
  `,
})

export const Link = Template.bind({})
Link.argTypes = {
  href: {
    defaultValue: 'https://holaluz.com',
    control: {
      type: 'text',
    },
  },
}

const InlineLinkTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <ma-text>
      Click
      <ma-link category="no-background" href="https://holaluz.com" target="_blank">here</ma-link>
      now!
    </ma-text>
  `,
})

export const LinkInline = InlineLinkTemplate.bind({})
LinkInline.argTypes = {
  category: {
    table: {
      disable: true,
    },
  },
  href: {
    table: {
      disable: true,
    },
  },
}
