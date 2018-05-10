import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

import HelloWorld from './HelloWorld.vue'

storiesOf('HelloWorld', module)
  .addDecorator(withKnobs)
  .add('default', withNotes('Holi')(() => {
    const textAlign = text('textAlign', 'center')
    const msg = text('msg', 'Hello World!')

    return ({
      components: { HelloWorld },
      template: '<HelloWorld :style="{textAlign: textAlign}" :msg="msg" />',
      data () {
        return {
          msg: msg,
          textAlign: textAlign
        }
      }
    })
  }))
