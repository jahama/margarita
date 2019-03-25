import { shallowMount } from '@vue/test-utils'
import TextInput from '@margarita/components/Form/TextInput/TextInput.vue'

describe('SelectInput', () => {
  it('should be checkbox element with label', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
      },
    })

    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
  })

  it('should be another type of input', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
        type: 'button',
      },
    })

    expect(wrapper.find('input[type="button"]').exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('Test TextInput')
  })

  it('should have error CSS class', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
        hasError: true,
        errorMessage: 'Something went wrong',
      },
    })

    expect(wrapper.find('input').classes()).toContain('text-input__field--error')
    expect(wrapper.findAll('div').at(1).exists()).toBe(true)

    const errorDiv = wrapper.findAll('div').at(1)
    expect(errorDiv.classes()).toContain('text-input__error-message')
    expect(errorDiv.text()).toBe('Something went wrong')
  })

  it('should be disabled', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
        disabled: true,
      },
    })

    expect(wrapper.find('input').is(':disabled')).toBe(true)
  })

  it('should have custom id', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
        id: 'test_textInput',
      },
    })

    expect(wrapper.find('label').attributes().for).toBe('test_textInput')
    expect(wrapper.find('input').attributes().id).toBe('test_textInput')
  })

  it('should have custom placeholder', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
        placeholder: 'This is an input text',
      },
    })

    expect(wrapper.find('input').attributes().placeholder).toBe('This is an input text')
  })

  it('should have initial value', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
        value: 'Test text',
      },
    })

    expect(wrapper.find('input').element.value).toBe('Test text')
  })

  it('should trigger input event with its value when typing', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
      },
    })

    const textInput = wrapper.find('input')
    textInput.element.value = 'test input'
    textInput.trigger('input', textInput.element.value)

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0][0]).toBe('test input')
    expect(wrapper.vm.lazyValue).toBe('test input')
  })

  it('should trigger change event with its value when changing content', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
        value: 'Test text',
      },
    })

    const textInput = wrapper.find('input')
    textInput.element.value = 'test input'
    textInput.trigger('input', textInput.element.value)
    textInput.trigger('change', textInput.element.value)

    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toBe('test input')
    expect(wrapper.vm.lazyValue).toBe('test input')
  })

  it('should trigger blur event with its value', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
        value: 'Test text',
      },
    })

    const textInput = wrapper.find('input')
    textInput.trigger('blur', wrapper.vm.lazyValue)

    expect(wrapper.emitted().blur).toBeTruthy()
    expect(wrapper.emitted().blur[0][0]).toBe('Test text')
  })

  it('should remove focus when pressing enter key', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Test TextInput',
        value: 'Test text',
      },
    })

    const textInput = wrapper.find('input')
    textInput.element.focus()
    console.log('before -->', textInput.is(':focus'))

    textInput.trigger('keyup')
    console.log(wrapper.trigger('keyup'))

    // expect(textInput.is(':focus')).toBe(false)
  })
})
