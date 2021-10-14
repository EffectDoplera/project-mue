import { CONFIRM_PASSWORD_VALIDATOR, EMAIL_VALIDATOR, PASSWORD_VALIDATOR } from 'utils/validation/validators'
import * as Yup from 'yup'

export const SignUpSchema = Yup.object().shape({
  email: EMAIL_VALIDATOR,
  password: PASSWORD_VALIDATOR,
  confirmPassword: CONFIRM_PASSWORD_VALIDATOR,
})
