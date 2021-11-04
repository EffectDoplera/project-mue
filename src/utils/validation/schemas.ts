import {
  CONFIRM_PASSWORD_VALIDATOR,
  EMAIL_VALIDATOR,
  PASSWORD_VALIDATOR,
  TRANSACTION_CATEGORY,
  TRANSACTION_TITLE,
  TRANSACTION_VALUE,
} from 'utils/validation/validators'
import * as Yup from 'yup'

export const SignUpSchema = Yup.object().shape({
  email: EMAIL_VALIDATOR,
  password: PASSWORD_VALIDATOR,
  confirmPassword: CONFIRM_PASSWORD_VALIDATOR,
})

export const CreateTransactionSchema = Yup.object().shape({
  title: TRANSACTION_TITLE,
  value: TRANSACTION_VALUE,
  category: TRANSACTION_CATEGORY,
})
