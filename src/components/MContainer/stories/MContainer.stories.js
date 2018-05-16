import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import GridNestedNotes from '../notes/GridNested.md'
import GridOffsetNotes from '../notes/GridOffset.md'
import GridOrderNotes from '../notes/GridOrder.md'
import GridSystemNotes from '../notes/GridSystem.md'

import MContainer from '../MContainer.vue'
import MRow from '../../MRow/MRow.vue'
import MCol from '../../MCol/MCol.vue'

storiesOf('Grid System', module)
  .addDecorator(withKnobs)
  .add('Usage', withMarkdownNotes(GridSystemNotes)(() => {
    const fluid = boolean('Fluid layout', false)
    const tag = select('Tag', [ 'div', 'header', 'aside', 'article', 'section' ], 'div')
    const noGutters = boolean('No gutters', false)

    return ({
      components: { MContainer, MRow, MCol },
      template: `
        <MContainer :fluid="fluid" :tag="tag" class="grid-example">
          <MRow :noGutters="noGutters">
            <MCol v-for="col in 1" :key="col" class="m-col--12">
              <div class="content">12</div>
            </MCol>
          </MRow>
          <MRow :noGutters="noGutters">
            <MCol v-for="col in 2" :key="col" class="m-col--6">
              <div class="content">6</div>
            </MCol>
          </MRow>
          <MRow :noGutters="noGutters">
            <MCol v-for="col in 3" :key="col" class="m-col--4">
              <div class="content">4</div>
            </MCol>
          </MRow>
          <MRow :noGutters="noGutters">
            <MCol v-for="col in 4" :key="col" class="m-col--3">
              <div class="content">3</div>
            </MCol>
          </MRow>
          <MRow :noGutters="noGutters">
            <MCol v-for="col in 6" :key="col" class="m-col--2">
              <div class="content">2</div>
            </MCol>
          </MRow>
          <MRow :noGutters="noGutters">
            <MCol v-for="col in 12" :key="col" class="m-col--1">
              <div class="content">1</div>
            </MCol>
          </MRow>
        </MContainer>
      `,

      data () {
        return {
          fluid: fluid,
          tag: tag,
          noGutters: noGutters
        }
      }
    })
  }))
  .add('Offset', withMarkdownNotes(GridOffsetNotes)(() => {
    const fluid = boolean('fluid', false)
    const noGutters = boolean('noGutters', false)

    return ({
      components: { MContainer, MRow, MCol },
      template: `
        <MContainer :fluid="fluid" class="grid-example">
          <MRow :noGutters="noGutters">
            <MCol class="m-col--10 m-col--offset-2">
              <div class="content">m-col--10 m-col--offset-2</div>
            </MCol>
            <MCol class="m-col--4 m-col--offset-5 m-col--md-offset-3">
              <div class="content">m-col--4 m-col--(offset-5 | md-offset-3)</div>
            </MCol>
            <MCol class="m-col--12 m-col--md-4 m-col--offset-1">
              <div class="content">m-col--12 m-col--md-4 m-col--offset-1</div>
            </MCol>
            <MCol class="m-col--12 m-col--sm-6 m-col--md-7 m-col--md-offset-1">
              <div class="content">m-col--12 m-col--(sm-6 | md-7) m-col--md-offset-1</div>
            </MCol>
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
      components: { MContainer, MRow, MCol },
      template: `
        <MContainer :fluid="fluid" class="grid-example">
          <MRow :noGutters="noGutters">
            <MCol class="m-col--6 m-col--lg-order-2">
              <div class="content">#1</div>
            </MCol>
            <MCol class="m-col--6">
              <div class="content">#2</div>
            </MCol>
          </MRow>
          <MRow :noGutters="noGutters">
            <MCol class="m-col--4 m-col--md-order-2 m-col--order-1">
              <div class="content">#1</div>
            </MCol>
            <MCol class="m-col--4 m-col--md-order-3 m-col--order-2">
              <div class="content">#2</div>
            </MCol>
            <MCol class="m-col--4 m-col--md-order-1 m-col--order-3">
              <div class="content">#3</div>
            </MCol>
          </MRow>
          <MRow :noGutters="noGutters">
            <MCol class="m-col--12 m-col--sm-6 m-col--md-3 m-col--md-order-4 m-col--sm-order-2">
              <div class="content">#1</div>
            </MCol>
            <MCol class="m-col--12 m-col--sm-6 m-col--md-3 m-col--md-order-3 m-col--sm-order-1">
              <div class="content">#2</div>
            </MCol>
            <MCol class="m-col--12 m-col--sm-6 m-col--md-3 m-col--md-order-2 m-col--sm-order-4">
              <div class="content">#3</div>
            </MCol>
            <MCol class="m-col--12 m-col--sm-6 m-col--md-3 m-col--md-order-1 m-col--sm-order-3">
              <div class="content">#4</div>
            </MCol>
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
      components: { MContainer, MRow, MCol },
      template: `
        <MContainer :fluid="fluid" class="grid-example">
          <MRow :noGutters="noGutters">
            <MCol class="m-col--12 m-col--sm-6 m-col--md-4">
              <div class="content">{{ lorem }}</div>
            </MCol>
            <MCol class="m-col--12 m-col--sm-6 m-col--md-3">
              <MRow :noGutters="noGutters">
                <MCol>
                  <div class="content">{{ lorem.slice(0, 70) }}</div>
                </MCol>
                <MCol v-for="i in 2" :key="i" class="m-col--12">
                  <div class="content">{{ lorem.slice(0, 40) }}</div>
                </MCol>
              </MRow>
            </MCol>
            <MCol class="m-col--12 m-col--sm-6 m-col--md-2">
              <div class="content">{{ lorem.slice(0, 90) }}</div>
            </MCol>
            <MCol class="m-col--12 m-col--sm-6 m-col--md-3">
              <div class="content">{{ lorem.slice(0, 100) }}</div>
            </MCol>
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
