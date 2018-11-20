import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import TheHeaderNotes from './notes/TheHeader.md'
import links from '../../../assets/json/links.json'

import WebHeader from '../WebHeader/WebHeader'
import ToolsHeader from '../ToolsHeader/ToolsHeader'

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('Web Header', withMarkdownNotes(TheHeaderNotes)(() => {

    return ({
      components: { WebHeader },

      data () {
        return {
          links: links
        }
      },

      methods: {
        onLangChanged: action('Changed Language:')
      },

      template: `
        <div>
          <WebHeader
            :onLangChanged="onLangChanged"
            :links="links"
          />
          <div class="page-content"></div>
        </div>
      `
    })
  }))

  .add('Tools Header', withMarkdownNotes(TheHeaderNotes)(() => {

    return ({
      components: { ToolsHeader },

      template: `
        <div>
          <ToolsHeader />
          <div class="page-content"></div>
        </div>
      `
    })
  }))
