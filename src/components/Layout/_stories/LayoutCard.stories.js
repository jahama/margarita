import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'

import LayoutCardNotes from './notes/LayoutCard.md'
import AlertBannerNotes from './notes/AlertBanner.md'

import GridContainer from '../../Grid/GridContainer/GridContainer'
import GridRow from '../../Grid/GridRow/GridRow'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import LayoutCard from '../LayoutCard/LayoutCard'
import AlertBanner from '../AlertBanner/AlertBanner'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('Cards', () => {
    const color = select('Color', [ 'white', 'gray' ], 'white')
    const hasPaddingTop = boolean('Bottom cards have padding top', true)

    return ({
      components: { LayoutCard, GridContainer, GridRow, GridColumn },
      template: `
        <GridContainer class="grid-example">
          <GridRow>
            <GridColumn class="grid-col--12">
              <LayoutCard
                :color="color"
                has-margin-top
              >
              I'm a {{ color }} layout card
              </LayoutCard>
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn v-for="col in 2" :key="col" class="grid-col--6">
              <LayoutCard
                color="gray"
                :hasPaddingTop="hasPaddingTop"
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      `,

      props: {
        color: {
          default: color
        },
        hasPaddingTop: {
          default: hasPaddingTop
        }
      }
    })
  }, { notes: LayoutCardNotes })
  .add('Alerts', () => {
    const size = select('Size', [ 'small', 'medium', 'large' ], 'medium')
    const type = select('Alert type', [ 'info', 'error', 'success', 'warning' ], 'error')
    const alertText = text('Alert text', 'Alert text')

    return ({
      components: { AlertBanner, GridContainer, GridRow, GridColumn },
      template: `
        <GridContainer class="grid-example">
          <GridRow>
            <GridColumn class="grid-col--12">
              <AlertBanner
                :text="text"
                :type="type"
                :size="size"
              />
            </GridColumn>
          </GridRow>
          <br />
          <GridRow>
            <GridColumn class="grid-col--12">
              <AlertBanner
                text="This is the text for a large alert banner"
                type="success"
                size="large"
                title="This is the title for a large alert banner"
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      `,

      props: {
        size: {
          default: size
        },
        text: {
          default: alertText
        },
        type: {
          default: type
        }
      }
    })
  }, { notes: AlertBannerNotes })
