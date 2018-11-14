import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import LayoutCardNotes from './notes/LayoutCard.md'
import AlertBannerNotes from './notes/AlertBanner.md'

import GridContainer from '../../Grid/GridContainer/GridContainer.vue'
import GridRow from '../../Grid/GridRow/GridRow.vue'
import GridColumn from '../../Grid/GridColumn/GridColumn.vue'
import LayoutCard from '../Card/LayoutCard.vue'
import AlertBanner from '../AlertBanner/AlertBanner.vue'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('Cards', withMarkdownNotes(LayoutCardNotes)(() => {
    const color = select('Color', ['white', 'gray'], 'white')
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

      data () {
        return {
          color: color,
          hasPaddingTop: hasPaddingTop
        }
      }
    })
  }))
  .add('Alerts', withMarkdownNotes(AlertBannerNotes)(() => {
    const size = select('Size', ['small', 'medium', 'large'], 'medium')
    const type = select('Alert type', ['info', 'error', 'success', 'warning'], 'error')
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

      data () {
        return {
          size,
          text: alertText,
          type
        }
      }
    })
  }))
