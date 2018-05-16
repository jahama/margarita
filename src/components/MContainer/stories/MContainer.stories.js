import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import GridNestedNotes from '../notes/GridNested.md'
import GridOffsetNotes from '../notes/GridOffset.md'
import GridOrderNotes from '../notes/GridOrder.md'
import GridSystemNotes from '../notes/GridSystem.md'

import MContainer from '../MContainer.vue'
import MRow from '../../MRow/MRow.vue'
import MColumn from '../../MColumn/MColumn.vue'

storiesOf('Grid System', module)
  .addDecorator(withKnobs)
  .add('Usage', withMarkdownNotes(GridSystemNotes)(() => {
    const fluid = boolean('fluid', false)
    const noGutters = boolean('noGutters', false)

    return ({
      components: { MContainer, MRow, MColumn },
      template: `
        <MContainer :fluid="fluid" class="grid-example">
          <MRow :noGutters="noGutters">
            <MColumn v-for="col in 1" :key="col" class="m-column--12">
              <div class="content">12</div>
            </MColumn>
          </MRow>
          <MRow :noGutters="noGutters">
            <MColumn v-for="col in 2" :key="col" class="m-column--6">
              <div class="content">6</div>
            </MColumn>
          </MRow>
          <MRow :noGutters="noGutters">
            <MColumn v-for="col in 3" :key="col" class="m-column--4">
              <div class="content">4</div>
            </MColumn>
          </MRow>
          <MRow :noGutters="noGutters">
            <MColumn v-for="col in 4" :key="col" class="m-column--3">
              <div class="content">3</div>
            </MColumn>
          </MRow>
          <MRow :noGutters="noGutters">
            <MColumn v-for="col in 6" :key="col" class="m-column--2">
              <div class="content">2</div>
            </MColumn>
          </MRow>
          <MRow :noGutters="noGutters">
            <MColumn v-for="col in 12" :key="col" class="m-column--1">
              <div class="content">1</div>
            </MColumn>
          </MRow>
        </MContainer>
      `,

      data () {
        return {
          fluid: fluid,
          noGutters: noGutters
        }
      }
    })
  }))
  .add('Offset', withMarkdownNotes(GridOffsetNotes)(() => {
    const fluid = boolean('fluid', false)
    const noGutters = boolean('noGutters', false)

    return ({
      components: { MContainer, MRow, MColumn },
      template: `
        <MContainer :fluid="fluid" class="grid-example">
          <MRow :noGutters="noGutters">
            <MColumn class="m-column--10 m-column--offset-1">
              <div class="content">m-column--10 m-column--offset-1</div>
            </MColumn>
            <MColumn class="m-column--7 m-column--offset-5 m-column--md-offset-2 m-column--lg-offset-5">
              <div class="content">m-column--7 m-column--(5 | md-offset-2 | lg-offset-5)</div>
            </MColumn>
            <MColumn class="m-column--12 m-column--sm-5 m-column--md-3">
              <div class="content">m-column--12 m-column--(sm-5 | md-3)</div>
            </MColumn>
            <MColumn class="m-column--12 m-column--sm-5 m-column--md-5">
              <div class="content">m-column--12 m-column--(sm-5 | md-5) m-column--lg-offset-2</div>
            </MColumn>
          </MRow>
        </MContainer>
      `,

      data () {
        return {
          fluid: fluid,
          noGutters: noGutters
        }
      }
    })
  }))
  .add('Order', withMarkdownNotes(GridOrderNotes)(() => {
    const fluid = boolean('fluid', false)
    const noGutters = boolean('noGutters', false)

    return ({
      components: { MContainer, MRow, MColumn },
      template: `
        <MContainer :fluid="fluid" class="grid-example">
          <MRow :noGutters="noGutters">
            <MColumn class="m-column--6 m-column--lg-order-2">
              <div class="content">#1</div>
            </MColumn>
            <MColumn class="m-column--6">
              <div class="content">#2</div>
            </MColumn>
          </MRow>
          <MRow :noGutters="noGutters">
            <MColumn class="m-column--4 m-column--md-order-2 m-column--order-1">
              <div class="content">#1</div>
            </MColumn>
            <MColumn class="m-column--4 m-column--md-order-3 m-column--order-2">
              <div class="content">#2</div>
            </MColumn>
            <MColumn class="m-column--4 m-column--md-order-1 m-column--order-3">
              <div class="content">#3</div>
            </MColumn>
          </MRow>
          <MRow :noGutters="noGutters">
            <MColumn class="m-column--12 m-column--sm-6 m-column--md-3 m-column--md-order-4 m-column--sm-order-2">
              <div class="content">#1</div>
            </MColumn>
            <MColumn class="m-column--12 m-column--sm-6 m-column--md-3 m-column--md-order-3 m-column--sm-order-1">
              <div class="content">#2</div>
            </MColumn>
            <MColumn class="m-column--12 m-column--sm-6 m-column--md-3 m-column--md-order-2 m-column--sm-order-4">
              <div class="content">#3</div>
            </MColumn>
            <MColumn class="m-column--12 m-column--sm-6 m-column--md-3 m-column--md-order-1 m-column--sm-order-3">
              <div class="content">#4</div>
            </MColumn>
          </MRow>
        </MContainer>
      `,

      data () {
        return {
          fluid: fluid,
          noGutters: noGutters
        }
      }
    })
  }))
  .add('Nested', withMarkdownNotes(GridNestedNotes)(() => {
    const fluid = boolean('fluid', false)
    const noGutters = boolean('noGutters', false)

    return ({
      components: { MContainer, MRow, MColumn },
      template: `
        <MContainer :fluid="fluid" class="grid-example">
          <MRow :noGutters="noGutters">
            <MColumn class="m-column--12 m-column--sm-6 m-column--md-4">
              <div class="content">{{ lorem }}</div>
            </MColumn>
            <MColumn class="m-column--12 m-column--sm-6 m-column--md-3">
              <MRow :noGutters="noGutters">
                <MColumn>
                  <div class="content">{{ lorem.slice(0, 70) }}</div>
                </MColumn>
                <MColumn v-for="i in 2" class="m-column--12">
                  <div class="content">{{ lorem.slice(0, 40) }}</div>
                </MColumn>
              </MRow>
            </MColumn>
            <MColumn class="m-column--12 m-column--sm-6 m-column--md-2">
              <div class="content">{{ lorem.slice(0, 90) }}</div>
            </MColumn>
            <MColumn class="m-column--12 m-column--sm-6 m-column--md-3">
              <div class="content">{{ lorem.slice(0, 100) }}</div>
            </MColumn>
          </MRow>
        </MContainer>
      `,

      data () {
        return {
          fluid: fluid,
          noGutters: noGutters,
          lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
        }
      }
    })
  }))
