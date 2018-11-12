import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TheHeaderNotes from './notes/TheHeader.md'

import TheHeader from '../TheHeader'

storiesOf('TheHeader', module)
  .addDecorator(withKnobs)
  .add('The Header', withMarkdownNotes(TheHeaderNotes)(() => {

    return ({
      components: { TheHeader },
      template: `
        <div>
          <TheHeader />
          <div class="page-content"></div>
        </div>
      `
    })
  }))
