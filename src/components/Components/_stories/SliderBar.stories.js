import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import SliderBarNotes from './notes/SliderBar.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import SliderBar from '../SliderBar/SliderBar'

storiesOf('Components', module)
  .addDecorator(withKnobs)

  .add('Slider Bar', withMarkdownNotes(SliderBarNotes)(() => {
    const value = text('Value', 'Medio')

    return ({
      components: { SliderBar, GridColumn },

      template: `
        <div>
          <div>
            <GridColumn style="margin-top:80px">
              <SliderBar
                v-model="value"
              />
            </GridColumn>
          </div>
        </div>`,

      data () {
        return {
          value
        }
      }
    })
  }))
