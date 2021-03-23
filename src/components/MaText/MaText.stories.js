import MaText from './MaText'
import docs from '../../../docs/components/MaText.docs.mdx'
import { text, tones } from '@margarita/tokens'

export default {
  title: 'Components/Text',
  component: MaText,
  argTypes: {
    tag: {
      control: {
        type: 'select',
        options: ['p', 'span', 'label'],
      },
    },
    tone: {
      control: {
        type: 'select',
        options: Object.keys(tones),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.keys(text.textSize.mobile),
      },
    },
  },
  parameters: {
    docs: { page: docs },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<ma-layout gap="large" columns="6 6">
      <ma-text v-bind="$props">I'M a text</ma-text>
      <ma-text v-bind="$props" style="background-color:var(--color-blue-light)">
        I'M a text
      </ma-text>
  </ma-layout>`,
})

export const Text = Template.bind({})

const StackedTextTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<ma-layout gap="medium" columns="6 6">
    <ma-stack :size="stackSize">
      <ma-text v-bind="$props">I'M a text</ma-text>
      <ma-text v-bind="$props">I'M a text</ma-text>
    </ma-stack>
    <div>
      <ma-text v-bind="$props">I'M a text</ma-text>
      <ma-text v-bind="$props">I'M a text</ma-text>
    </div>
  </ma-layout>`,
})

export const StackedText = StackedTextTemplate.bind({})
