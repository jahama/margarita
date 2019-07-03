import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import LayoutCardNotes from './LayoutCard.md'

import GridColumn from '@margarita/components/GridColumn'
import GridContainer from '@margarita/components/GridContainer'
import GridRow from '@margarita/components/GridRow'
import LayoutCard from '@margarita/components/LayoutCard'

storiesOf('LayoutCard', module)
  .addDecorator(withKnobs)
  .add(
    'LayoutCard',
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
              </layout-card>
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
