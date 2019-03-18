import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, object } from '@storybook/addon-knobs'

import GridNestedNotes from './notes/GridNested.md'
import GridOffsetNotes from './notes/GridOffset.md'
import GridOrderNotes from './notes/GridOrder.md'
import GridSystemNotes from './notes/GridSystem.md'
import GridFormNotes from './notes/GridForm.md'

import GridContainer from '../GridContainer/GridContainer'
import GridRow from '../GridRow/GridRow'
import GridColumn from '../GridColumn/GridColumn'
import TextInput from '../../Form/TextInput/TextInput'
import SelectInput from '../../Form/SelectInput/SelectInput'
import LayoutCard from '../../Layout/LayoutCard/LayoutCard'

storiesOf('Grid System', module)
  .addDecorator(withKnobs)
  .add('Usage', () => {
    const fluid = boolean('Fluid layout', false)
    const tag = select('Tag', [ 'div', 'header', 'aside', 'article', 'section' ], 'div')
    const noGutters = boolean('No gutters', false)

    return ({
      components: { GridContainer, GridRow, GridColumn },

      template: `
        <GridContainer :fluid="fluid" :tag="tag" class="grid-example">
          <GridRow :noGutters="noGutters">
            <GridColumn v-for="col in 1" :key="col" class="grid-col--12">
              <div class="content px0">12</div>
            </GridColumn>
          </GridRow>
          <GridRow :noGutters="noGutters">
            <GridColumn v-for="col in 2" :key="col" class="grid-col--6">
              <div class="content px0">6</div>
            </GridColumn>
          </GridRow>
          <GridRow :noGutters="noGutters">
            <GridColumn v-for="col in 3" :key="col" class="grid-col--4">
              <div class="content px0">4</div>
            </GridColumn>
          </GridRow>
          <GridRow :noGutters="noGutters">
            <GridColumn v-for="col in 4" :key="col" class="grid-col--3">
              <div class="content px0">3</div>
            </GridColumn>
          </GridRow>
          <GridRow :noGutters="noGutters">
            <GridColumn v-for="col in 6" :key="col" class="grid-col--2">
              <div class="content px0">2</div>
            </GridColumn>
          </GridRow>
          <GridRow :noGutters="noGutters">
            <GridColumn v-for="col in 12" :key="col" class="grid-col--1">
              <div class="content px0">1</div>
            </GridColumn>
          </GridRow>
        </GridContainer>
      `,

      props: {
        fluid: {
          default: fluid
        },
        tag: {
          default: tag
        },
        noGutters: {
          default: noGutters
        }
      }
    })
  }, { notes: GridSystemNotes })
  .add('Offset', () => {
    const fluid = boolean('fluid', false)
    const noGutters = boolean('noGutters', false)

    return ({
      components: { GridContainer, GridRow, GridColumn },

      template: `
        <GridContainer :fluid="fluid" class="grid-example">
          <GridRow :noGutters="noGutters">
            <GridColumn class="grid-col--10 grid-col--offset-2">
              <div class="content">grid-col--10 grid-col--offset-2</div>
            </GridColumn>
            <GridColumn class="grid-col--4 grid-col--offset-5 grid-col--md-offset-3">
              <div class="content">grid-col--4 grid-col--(offset-5 | md-offset-3)</div>
            </GridColumn>
            <GridColumn class="grid-col--12 grid-col--md-4 grid-col--md-offset-1">
              <div class="content">grid-col--12 grid-col--md-4 grid-col--md-offset-1</div>
            </GridColumn>
            <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-7 grid-col--sm-offset-1">
              <div class="content">grid-col--12 grid-col--(sm-6 | md-7) grid-col--sm-offset-1</div>
            </GridColumn>
          </GridRow>
        </GridContainer>
      `,

      props: {
        fluid: {
          default: fluid
        },
        noGutters: {
          default: noGutters
        }
      }
    })
  }, { notes: GridOffsetNotes })
  .add('Order', () => {
    const fluid = boolean('fluid', false)
    const noGutters = boolean('noGutters', false)

    return ({
      components: { GridContainer, GridRow, GridColumn },

      template: `
        <GridContainer :fluid="fluid" class="grid-example">
          <GridRow :noGutters="noGutters">
            <GridColumn class="grid-col--6 grid-col--lg-order-2">
              <div class="content">#1</div>
            </GridColumn>
            <GridColumn class="grid-col--6">
              <div class="content">#2</div>
            </GridColumn>
          </GridRow>
          <GridRow :noGutters="noGutters">
            <GridColumn class="grid-col--4 grid-col--md-order-2 grid-col--order-1">
              <div class="content">#1</div>
            </GridColumn>
            <GridColumn class="grid-col--4 grid-col--md-order-3 grid-col--order-2">
              <div class="content">#2</div>
            </GridColumn>
            <GridColumn class="grid-col--4 grid-col--md-order-1 grid-col--order-3">
              <div class="content">#3</div>
            </GridColumn>
          </GridRow>
          <GridRow :noGutters="noGutters">
            <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-3 grid-col--md-order-4 grid-col--sm-order-2">
              <div class="content">#1</div>
            </GridColumn>
            <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-3 grid-col--md-order-3 grid-col--sm-order-1">
              <div class="content">#2</div>
            </GridColumn>
            <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-3 grid-col--md-order-2 grid-col--sm-order-4">
              <div class="content">#3</div>
            </GridColumn>
            <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-3 grid-col--md-order-1 grid-col--sm-order-3">
              <div class="content">#4</div>
            </GridColumn>
          </GridRow>
        </GridContainer>
      `,

      props: {
        fluid: {
          default: fluid
        },
        noGutters: {
          default: noGutters
        }
      }
    })
  }, { notes: GridOrderNotes })
  .add('Nested', () => {
    const fluid = boolean('fluid', false)
    const noGutters = boolean('noGutters', false)
    const directionColumn = boolean('Light blue row has flex direction column', true)

    return ({
      components: { GridContainer, GridRow, GridColumn },

      template: `
        <GridContainer :fluid="fluid" class="grid-example">
          <GridRow :noGutters="noGutters">
            <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-4">
              <div class="content">{{ lorem }}</div>
            </GridColumn>
            <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-3" :directionColumn="directionColumn">
              <GridRow :noGutters="noGutters">
                <GridColumn>
                  <div class="content pink">{{ lorem.slice(0, 70) }}</div>
                </GridColumn>
              </GridRow>
              <GridRow :noGutters="noGutters">
                <GridColumn v-for="i in 2" :key="i" class="grid-col--6">
                  <div class="content">{{ lorem.slice(0, 40) }}</div>
                </GridColumn>
              </GridRow>
            </GridColumn>
            <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-2">
              <div class="content">{{ lorem.slice(0, 90) }}</div>
            </GridColumn>
            <GridColumn class="grid-col--12 grid-col--sm-6 grid-col--md-3">
              <div class="content">{{ lorem.slice(0, 100) }}</div>
            </GridColumn>
          </GridRow>
        </GridContainer>
      `,

      props: {
        fluid: {
          default: fluid
        },
        noGutters: {
          default: noGutters
        },
        directionColumn: {
          default: directionColumn
        }
      },

      data () {
        return {
          lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
        }
      }
    })
  }, { notes: GridNestedNotes })

  .add('Form', () => {
    const defaultOptions = [
      { text: 'Option1', value: 'option1' },
      { text: 'Option2', value: 'option2' },
      { text: 'Option3', value: 'option3' },
      { text: 'Option4', value: 'option4' }
    ]
    const options = object('Options', defaultOptions)
    const noMarginBottom = boolean('All col from last row dont have margin bottom', true)
    const hasMarginTop = boolean('All cols from last row have margin top', false)

    return ({
      components: { GridContainer, GridRow, GridColumn, TextInput, SelectInput, LayoutCard },

      template: `
        <GridContainer form>
          <LayoutCard>
            <GridRow>
              <GridColumn class="grid-col--12 grid-col--md-4">
                <TextInput
                  :label="'Mobile col-12, Desktop col-4'"
                />
              </GridColumn>
              <GridColumn class="grid-col--12 grid-col--md-4">
                <SelectInput
                  :label="'Mobile col-12, Desktop col-4'"
                  :options="options"
                />
              </GridColumn>
              <GridColumn class="grid-col--12 grid-col--md-4">
                <TextInput
                  :label="'Mobile col-12, Desktop col-4'"
                />
              </GridColumn>
            </GridRow>
            <GridRow :noMarginBottom="noMarginBottom" :hasMarginTop="hasMarginTop">
              <GridColumn class="grid-col--12 grid-col--md-3">
                <TextInput
                  :label="'Mobile col-12, Desktop col-3'"
                />
              </GridColumn>
              <GridColumn class="grid-col--6 grid-col--md-5">
                <SelectInput
                  :label="'Mobile col-6, Desktop col-5'"
                  :options="options"
                />
              </GridColumn>
              <GridColumn class="grid-col--6 grid-col--md-4">
                <TextInput
                  :label="'Mobile col-6, Desktop col-4'"
                />
              </GridColumn>
            </GridRow>
          </LayoutCard>
        </GridContainer>
      `,

      props: {
        hasMarginTop: {
          default: hasMarginTop
        },
        noMarginBottom: {
          default: noMarginBottom
        },
        options: {
          default: options
        }
      }
    })
  }, { notes: GridFormNotes })
