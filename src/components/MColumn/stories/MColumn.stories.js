import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import withMarkdownNotes from '^/withMarkdownNotes'

import MColumnNotes from '../notes/MColumn.md'

import MColumn from '../MColumn.vue'

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('MColumn', withMarkdownNotes(MColumnNotes)(() => {
    const content = text('content', 'Holi')

    return ({
      components: { MColumn },
      template: '<MColumn class="half yellow">{{ content }}</MColumn>',

      data () {
        return {
          content: content
        }
      }
    })
  }))
