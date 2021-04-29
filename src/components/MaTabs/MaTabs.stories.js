import MaTabs from '.'
import MaTab from '../MaTab'

export default {
  title: 'Components/Tabs',
  component: MaTabs,
  args: {
    label: 'Label',
    id: 'text-input',
  },
  argTypes: {
    'v-model': { control: false },
    input: { action: 'input' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MaTab },
  template: `
    <div>
      <ma-text>Selected tab: {{selectedTab}}</ma-text>
      <ma-tabs v-bind="$props" v-model="selectedTab" @input="input">
        <ma-tab>
          <template #header><ma-heading>Header Tab1</ma-heading></template>
          Hola 1
        </ma-tab>
        <ma-tab>
          <template #header><ma-heading>Header Tab2</ma-heading></template>
          Hola 2
        </ma-tab>
        <ma-tab>
          <template #header><ma-heading>Header Tab3</ma-heading></template>
          Hola 3
        </ma-tab>
      </ma-tabs>
    </div>
  `,
  data() {
    return { selectedTab: 0 }
  },
})

export const Tabs = Template.bind({})
