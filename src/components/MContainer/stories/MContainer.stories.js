import './stories.scss'
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import GridSystemNotes from '../notes/GridSystem.md'

import MContainer from '../MContainer.vue'
import MRow from '../../MRow/MRow.vue'
import MColumn from '../../MColumn/MColumn.vue'

storiesOf('Grid System', module)
  .addDecorator(withKnobs)
  .add('Usage', withMarkdownNotes(GridSystemNotes)(() => {
    const fluid = boolean('fluid', false)

    return ({
      components: { MContainer, MRow, MColumn },
      template: `
        <MContainer :fluid="fluid" class="grid-example">
          <MRow>
            <MColumn v-for="col in 1" :key="col" class="m-column--12">
              <div>12</div>
            </MColumn>
          </MRow>
          <MRow>
            <MColumn v-for="col in 2" :key="col" class="m-column--6">
              <div>6</div>
            </MColumn>
          </MRow>
          <MRow>
            <MColumn v-for="col in 3" :key="col" class="m-column--4">
              <div>4</div>
            </MColumn>
          </MRow>
          <MRow>
            <MColumn v-for="col in 4" :key="col" class="m-column--3">
              <div>3</div>
            </MColumn>
          </MRow>
          <MRow>
            <MColumn v-for="col in 6" :key="col" class="m-column--2">
              <div>2</div>
            </MColumn>
          </MRow>
          <MRow>
            <MColumn v-for="col in 12" :key="col" class="m-column--1">
              <div>1</div>
            </MColumn>
          </MRow>
        </MContainer>
      `,

      data () {
        return {
          fluid: fluid
        }
      }
    })
  }))
