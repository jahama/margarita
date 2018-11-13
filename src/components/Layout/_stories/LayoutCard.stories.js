import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import LayoutCardNotes from './notes/LayoutCard.md'

import GridContainer from '../../Grid/GridContainer/GridContainer.vue'
import GridRow from '../../Grid/GridRow/GridRow.vue'
import GridColumn from '../../Grid/GridColumn/GridColumn.vue'
import LayoutCard from '../LayoutCard/LayoutCard.vue'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('Cards', withMarkdownNotes(LayoutCardNotes)(() => {
    const color = select('Color', ['white', 'gray'], 'white')
    const hasMarginTop = boolean('Bottom cards have margin top', false)

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
                :color="'gray'"
                :hasMarginTop="hasMarginTop"
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      `,

      data () {
        return {
          color: color,
          hasMarginTop: hasMarginTop
        }
      }
    })
  }))
