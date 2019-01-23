import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import TheHeaderNotes from './notes/TheHeader.md'
import links from '../../../assets/json/links.json'

import ToolsHeader from '../ToolsHeader/ToolsHeader'

storiesOf('Header', module)
  .addDecorator(withKnobs)

  .add('Tools Header', withMarkdownNotes(TheHeaderNotes)(() => {
    const loggedUser = text('Logged User', 'Anna Collins')
    const pageTitle = text('Page Title', 'New Contract')
    const userRole = text('User Role', 'Administrator')
    const active = links[0].link

    return ({
      components: { ToolsHeader },

      data () {
        return {
          active,
          links,
          loggedUser,
          pageTitle,
          userRole
        }
      },

      methods: {
        onLogout: action('Logout user')
      },

      template: `
        <div class="story--no-margin">
          <ToolsHeader
            :active="active"
            :links="links"
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
