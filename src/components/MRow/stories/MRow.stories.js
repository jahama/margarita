import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import withMarkdownNotes from '^/withMarkdownNotes'

import MRowNotes from '../notes/MRow.md'

import MRow from '../MRow.vue'

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('MRow', withMarkdownNotes(MRowNotes)(() => {
    const content = text('content', 'Holi')

    return ({
      components: { MRow },
      template: '<MRow class="example test">{{ content }}</MRow>',

      data () {
        return {
          content: content
        }
      }
    })
  }))
