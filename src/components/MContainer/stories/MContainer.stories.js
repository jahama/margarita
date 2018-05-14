import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue'
import withMarkdownNotes from '^/withMarkdownNotes'

import GridExampleNotes from '../notes/GridExample.md'
import MContainerNotes from '../notes/MContainer.md'

import MContainer from '../MContainer.vue'
import MRow from '../../MRow/MRow.vue'
import MColumn from '../../MColumn/MColumn.vue'

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('MContainer', withMarkdownNotes(MContainerNotes)(() => {
    const fluid = boolean('fluid', false)

    return ({
      components: { MContainer },
      template: '<MContainer :fluid="fluid" class="example test" />',

      data () {
        return {
          fluid: fluid
        }
      }
    })
  }))

storiesOf('Examples', module)
  .addDecorator(withKnobs)
  .add('Grid Example', withMarkdownNotes(GridExampleNotes)(() => {
    const fluid = boolean('fluid', false)

    return ({
      components: { MContainer, MRow, MColumn },
      template: `
        <MContainer :fluid="fluid" class="example test">
          <MRow>
            <MColumn class="col-6 m-column--yellow">Holi</MColumn>
            <MColumn class="col-6 m-column--cyan">Adiosi</MColumn>
          </MRow>
        </MContainer>
      `,

      data () {
        return {
          fluid: fluid
        }
      }
    })
  }))
