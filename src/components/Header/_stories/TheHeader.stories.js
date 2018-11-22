import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
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
        <div class="story--no-margin">
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
    const loggedUser = text('Logged User', 'Anna Collins')
    const pageTitle = text('Page Title', 'New Contract')
    const userRole = text('User Role', 'Administrator')

    return ({
      components: { ToolsHeader },

      data () {
        return {
          loggedUser,
          pageTitle,
          userRole
        }
      },

      methods: {
        onLogout: action('Logout user')
      },

      template: `
        <div>
          <ToolsHeader
            :loggedUser="loggedUser"
            :pageTitle="pageTitle"
            :userRole="userRole"
            @logout="onLogout"
          />
          <div class="page-content"></div>
        </div>
      `
    })
  }))
