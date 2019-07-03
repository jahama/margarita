import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import LayoutCardNotes from './notes/LayoutCard.md'
import AlertBannerNotes from './notes/AlertBanner.md'
import SidebarDrawerNotes from './notes/SidebarDrawer.md'

import GridContainer from '../../Grid/GridContainer/GridContainer'
import GridRow from '../../Grid/GridRow/GridRow'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import LayoutCard from '../LayoutCard/LayoutCard'
import AlertBanner from '../AlertBanner/AlertBanner'
import SidebarDrawer from '../SidebarDrawer/SidebarDrawer'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add(
    'Cards',
    () => {
      const color = select('Color', ['white', 'gray'], 'white')
      const hasPaddingTop = boolean('Bottom cards have padding top', true)

      return {
        components: { LayoutCard, GridContainer, GridRow, GridColumn },
        template: `
        <grid-container class="grid-example">
          <grid-row>
            <grid-column class="grid-col--12">
              <layout-card
                :color="color"
                has-margin-top
              >
              I'm a {{ color }} layout card
              </LayoutCard>
            </grid-column>
          </grid-row>
          <grid-row>
            <grid-column v-for="col in 2" :key="col" class="grid-col--6">
              <layout-card
                color="gray"
                :hasPaddingTop="hasPaddingTop"
              />
            </grid-column>
          </grid-row>
        </grid-container>
      `,

        props: {
          color: {
            default: color,
          },
          hasPaddingTop: {
            default: hasPaddingTop,
          },
        },
      }
    },
    { notes: LayoutCardNotes }
  )
  .add(
    'Alerts',
    () => {
      const size = select('Size', ['small', 'medium', 'large'], 'medium')
      const type = select(
        'Alert type',
        ['info', 'error', 'success', 'warning'],
        'error'
      )
      const alertText = text('Alert text', 'Alert text')

      const alertTitle = text('Alert title', 'Alert title')

      return {
        components: { AlertBanner, GridContainer, GridRow, GridColumn },
        template: `
        <grid-container class="grid-example">
          <grid-row>
            <grid-column class="grid-col--12">
              <alert-banner
                :title="title"
                :text="text"
                :type="type"
                :size="size"
              />
            </grid-column>
          </grid-row>
          <br />
          <grid-row>
            <grid-column class="grid-col--12">
              <alert-banner
                text="This is the text for a large alert banner"
                type="success"
                size="large"
                title="This is the title for a large alert banner"
              />
            </grid-column>
          </grid-row>
        </grid-container>
      `,

        props: {
          size: {
            default: size,
          },
          text: {
            default: alertText,
          },
          title: {
            default: alertTitle,
          },
          type: {
            default: type,
          },
        },
      }
    },
    { notes: AlertBannerNotes }
  )
  .add(
    'SidebarDrawer',
    () => {
      const position = select('Position', ['left', 'right'], 'left')
      const type = select('Type', ['attached', 'fixed'], 'attached')
      const show = boolean('Show', true)
      const overlay = boolean('Overlay', true)

      return {
        components: {
          SidebarDrawer,
          LayoutCard,
          GridContainer,
          GridRow,
          GridColumn,
        },
        template: `
        <grid-row>
          <grid-column class="grid-col--12">
            <layout-card
              color="gray"
              has-margin-top
            >
            I'm a layout card
              <sidebar-drawer
              :position="position"
              :show="show"
              :type="type"
              :overlay="overlay"
              @click-overlay="action"
              >
                <span>I am a Navigation Drawer</span>
            </sidebar-drawer>
            </layout-card>
          </grid-column>
        </grid-row>
      `,

        props: {
          position: {
            default: position,
          },
          show: {
            default: show,
          },
          type: {
            default: type,
          },
          overlay: {
            default: overlay,
          },
        },

        methods: {
          action: action('clicked'),
        },
      }
    },
    { notes: SidebarDrawerNotes }
  )
