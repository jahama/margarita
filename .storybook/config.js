import { addDecorator, configure } from '@storybook/vue'

import centered from '@storybook/addon-centered'

addDecorator(centered)

const req = require.context('../src/components', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
