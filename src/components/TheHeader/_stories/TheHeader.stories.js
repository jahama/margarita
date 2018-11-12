import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import TheHeaderNotes from './notes/TheHeader.md'

import TheHeader from '../TheHeader'

storiesOf('TheHeader', module)
  .addDecorator(withKnobs)
  .add('The Header', withMarkdownNotes(TheHeaderNotes)(() => {

    return ({
      components: { TheHeader },
      methods: {
        onLangChanged: action('Changed Language:')
      },
      template: `
        <div>
          <TheHeader :onLangChanged="onLangChanged" />
          <div class="page-content"></div>
        </div>
      `
    })
  }))
