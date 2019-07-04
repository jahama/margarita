import '../../scss/_margarita-reset.scss'

import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import GridRow from '@margarita/components/GridRow'
import GridColumn from '@margarita/components/GridColumn'

import RadioButton from './RadioButton'

storiesOf('RadioButton', module)
  .addDecorator(withKnobs)

  .add('RadioButton', () => {
    const card = boolean('Card', true)
    const disabled = boolean('Disabled', true)
    const text1 = text('Text radio 1', 'My first radio')
    const text2 = text('Text radio 2', 'Second radio button')

    return {
      components: { RadioButton, GridRow, GridColumn },

      template: `
        <grid-row>
          <grid-column class="grid-col--3 grid-col--offset-3">
            <radio-button name="patata" v-model="selected" :card="card" value="id1" @change="onChange">
              {{ text1 }}
            </radio-button>
          </grid-column>
          <grid-column class="grid-col--3">
            <radio-button v-model="selected" :card="card" :disabled="disabled" value="id2" @change="onChange">
              {{ text2 }}
            </radio-button>
          </grid-column>
        </grid-row>
      `,

      props: {
        card: {
          default: card,
        },
        text1: {
          default: text1,
        },
        text2: {
          default: text2,
        },
        disabled: {
          default: disabled,
        },
      },

      data() {
        return {
          selected: 'id1',
        }
      },

      methods: {
        onChange: action(`Change`),
      },
    }
  })
