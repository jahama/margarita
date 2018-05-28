import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import MContainer from '../../MContainer/MContainer.vue'
import MRow from '../../MRow/MRow.vue'
import MCol from '../../MCol/MCol.vue'

import MLogo from '../MLogo.vue'
import MLogoNotes from '../notes/MLogoNotes.md'

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add('Usage', withMarkdownNotes(MLogoNotes)(() => {
    const color = boolean('color', true)

    return ({
      template: `
        <MContainer fluid class="logo-example">
          <MRow>
            <MCol :class="{ grey: !color }">
              <MLogo :color="color" />
            </MCol>
          </MRow>
        </MContainer>
      `,
      components: { MLogo, MContainer, MRow, MCol },
      data () {
        return {
          color: color
        }
      }
    })
  }))
