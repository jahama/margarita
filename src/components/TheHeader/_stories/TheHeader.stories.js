import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TheHeaderNotes from './notes/TheHeader.md'

import TheHeader from '../TheHeader'

storiesOf('TheHeader', module)
  .addDecorator(withKnobs)
  .add('The Header', withMarkdownNotes(TheHeaderNotes)(() => {
    const opened = boolean('Opened Menu', false)

    return ({
      components: { TheHeader },
      template: `<TheHeader opened="opened" />`,
      data () {
        return {
          opened: opened
        }
      }
    })
  }))
