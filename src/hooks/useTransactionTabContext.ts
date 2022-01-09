import { useTabContext } from '@mui/lab'
import { OperationType } from 'core/enums'

export const useTransactionTabContext = (): OperationType => {
  const { value } = useTabContext() ?? { value: OperationType.INCOME }

  return value as OperationType
}
