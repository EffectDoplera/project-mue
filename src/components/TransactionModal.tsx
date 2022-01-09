import { Button, Modal, Paper } from '@mui/material'
import { TransactionAction } from 'components/TransactionAction'
import { useTransactionTabContext } from 'hooks'
import { FC, memo } from 'react'

interface TransactionsModalProps {
  open: boolean
  setOpen: (status: boolean) => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const TransactionsModal: FC<TransactionsModalProps> = ({ open, setOpen }) => {
  const transactionType = useTransactionTabContext()

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Button fullWidth onClick={handleOpen}>
        <TransactionAction type={transactionType} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper>MODAL</Paper>
        {/*<Stack alignItems="center" justifyContent="center" direction="column" gap={2} sx={style}>*/}
        {/*  <Paper>*/}
        {/*    <CreateTransactionForm onFinish={handleClose} />*/}
        {/*  </Paper>*/}
        {/*</Stack>*/}
      </Modal>
    </>
  )
}

export default memo(TransactionsModal)
