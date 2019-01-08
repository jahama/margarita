import { storiesOf } from '@storybook/vue'
import { withKnobs, number } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import SliderBarNotes from './notes/SliderBar.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import SliderBar from '../SliderBar/SliderBar'

storiesOf('Components', module)
  .addDecorator(withKnobs)

  .add('Slider Bar', withMarkdownNotes(SliderBarNotes)(() => {
    const value = number('Pill Text', 1)

    return ({
      components: { SliderBar, GridColumn },

      template: `
        <GridColumn style="margin-top:80px">
          <SliderBar
            :value="value"
          />
        </GridColumn>`,

      data () {
        return {
          value
        }
      }
    })
  }))
