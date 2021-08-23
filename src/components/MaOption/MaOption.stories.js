import MaOption from './MaOption'
import docsRadio from '../../../docs/components/form-elements/MaOption/Radio.docs.mdx'
import docsCheckbox from '../../../docs/components/form-elements/MaOption/Checkbox.docs.mdx'
import docsCard from '../../../docs/components/MaCard.docs.mdx'
import { tones } from '@margarita/tokens'

export default {
  title: 'Components/Form Elements/Option',
  component: MaOption,
  argTypes: {
    'v-model': {
      control: false,
    },
    change: { action: 'change' },
    size: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium'],
      },
    },
    tone: {
      control: {
        type: 'select',
        options: Object.keys(tones),
      },
    },
  },
}

export const Option = (_, { argTypes }) => ({
  data: () => ({
    selectedOption: 'radio1',
  }),
  props: Object.keys(argTypes),
  template: `
    <ma-stack space="small">
      <ma-option v-model="selectedOption" v-bind="$props" value="radio1" id="radio1" @change="change">
        My first radio
      </ma-option>
      <ma-option v-model="selectedOption" v-bind="$props" value="radio2" id="radio2" @change="change">
        My second radio
      </ma-option>
    </ma-stack>
  `,
})

const OptionStates = ({ type = 'radio', card = false }) => () => ({
  data: () => ({
    selectedOption: 'radio1',
  }),
  template: `
    <ma-stack space="small">
      <ma-option type="${type}" :card="${card}">
        Default
      </ma-option>
      <ma-option v-model="selectedOption" value="radio1" type="${type}" :card="${card}">
      Active
      </ma-option>
      <ma-option type="${type}" :card="${card}" disabled >
        Disabled
      </ma-option>
      <ma-option type="${type}" :card="${card}" has-error >
        Error
      </ma-option>
      <ma-option type="${type}" :card="${card}" ref="focusElem" >
        Focus
      </ma-option>
    </ma-stack>
  `,
  mounted() {
    this.$refs.focusElem.$el.focus()
  },
})

export const RadioStates = OptionStates({ type: 'radio' })
RadioStates.bind({})
RadioStates.parameters = {
  docs: { page: docsRadio },
}

export const CheckboxStates = OptionStates({ type: 'checkbox' })
CheckboxStates.bind({})
CheckboxStates.parameters = {
  docs: { page: docsCheckbox },
}

export const CardStates = OptionStates({ type: 'checkbox', card: true })
CardStates.bind({})
CardStates.parameters = {
  docs: { page: docsCard },
}
