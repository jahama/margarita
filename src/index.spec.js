import { createLocalVue } from '@vue/test-utils'
import isVueComponent from 'is-vue-component'

import * as Margarita from './index'

// Get the default export...
const defaultExport = Margarita.default

// ...and remove it from the object, so we have the list of imported comps.
delete Margarita.default

const margaritaComponents = Object.values(Margarita)

const localVue = createLocalVue()
localVue.use(defaultExport)

describe('Margarita install function', () => {
  it('exposes an install function', () => {
    expect(defaultExport).toHaveProperty('install')
  })

  margaritaComponents.forEach(({ name }) => {
    it(`installs ${name}`, () => {
      expect(localVue.options.components).toHaveProperty(name)
    })
  })
})

describe('Margarita named exports', () => {
  margaritaComponents.forEach(component => {
    it(`${component.name} is a valid exposed component`, () => {
      expect(isVueComponent(component)).toBe(true)
    })
  })
})
