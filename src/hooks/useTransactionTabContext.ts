import { useTabContext } from '@mui/lab'
import { CategoryType } from 'core/enums'

export const useTransactionTabContext = (): CategoryType => {
  const { value } = useTabContext() ?? { value: CategoryType.INCOME }

  return value as CategoryType
}
