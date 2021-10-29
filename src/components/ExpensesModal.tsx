import { Button, Modal, Paper, Stack } from '@mui/material'
import { TransactionActionItem } from 'components/TransactionActions/TransactionActionItem'
import { CategoryType } from 'core/enums'
import { CreateExpensesForm } from 'forms/CreateExpensesForm'
import { FC, memo } from 'react'

interface ExpensesModalProps {
  open: boolean
  setOpen: (status: boolean) => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const ExpensesModal: FC<ExpensesModalProps> = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Button fullWidth onClick={handleOpen}>
        <TransactionActionItem type={CategoryType.EXPENSE} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack alignItems="center" justifyContent="center" direction="column" gap={2} sx={style}>
          <Paper>
            <CreateExpensesForm onFinish={handleClose} />
          </Paper>
        </Stack>
      </Modal>
    </>
  )
}

export default memo(ExpensesModal)
