export const isRequired = (value) => (value ? '' : 'error-required')

export const isEmail = (value) => {
  const isEmailValidEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return isEmailValidEx.test(value.toLowerCase()) ? '' : 'error-email-invalid'
}

export const isPhoneNumber = (value) => {
  const isPhoneValidEx = /^[6789]{1}[0-9]{8}$/g
  return isPhoneValidEx.test(value) ? '' : 'error-phone-invalid'
}
