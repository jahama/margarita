import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import notes from './notes/TheHeader.md'
import links from '../../../assets/json/links.json'

import ToolsHeader from '../ToolsHeader/ToolsHeader'

storiesOf('Header', module)
  .addDecorator(withKnobs)

  .add('Tools Header', () => {
    const loggedUser = text('Logged User', 'Anna Collins')
    const pageTitle = text('Page Title', 'New Contract')
    const userRole = text('User Role', 'Administrator')
    const active = links[0].link

    return ({
      components: { ToolsHeader },

      props: {
        active: {
          default: active,
        },
        links: {
          default: links,
        },
        loggedUser: {
          default: loggedUser,
        },
        pageTitle: {
          default: pageTitle,
        },
        userRole: {
          default: userRole,
        },
      },

      methods: {
        onLogout: action('Logout user'),
      },

      template: `
        <div class="story--no-margin">
          <tools-header
            :active="active"
            :links="links"
            :loggedUser="loggedUser"
            :pageTitle="pageTitle"
            :userRole="userRole"
            @logout="onLogout"
          />
          <div class="page-content"></div>
        </div>
      `,
    })
  }, { notes })
