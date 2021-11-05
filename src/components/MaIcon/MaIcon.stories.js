import icons from './availableIcons'
import docs from '../../../docs/components/MaIcon.docs.mdx'
import MaIcon from './MaIcon'
import { tones } from '@margarita/tokens'

export default {
  title: 'Components/Icon',
  component: MaIcon,
  args: {
    icon: icons[0],
    id: 'randomId',
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: icons,
      },
    },
    tone: {
      control: {
        type: 'select',
        options: Object.keys(tones),
      },
    },
  },
  parameters: {
    docs: { page: docs },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<ma-icon v-bind="$props" />`,
})

export const Icon = Template.bind({})
