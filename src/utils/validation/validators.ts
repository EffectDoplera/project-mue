import * as Yup from 'yup'

export const PASSWORD_VALIDATOR = Yup.string()
  .min(6, 'Too Short!')
  .max(30, 'Too Long!')
  .required('Password is required')
export const CONFIRM_PASSWORD_VALIDATOR = Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
export const EMAIL_VALIDATOR = Yup.string().email('Enter a valid email').required('Email is required')
