import { Button, Modal } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MainCard } from 'components/MainCard'
import { NewOperation } from 'forms/NewOperation'
import { FC, useRef, useState } from 'react'

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  overflow: 'hidden',
}))

const ModalWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}))

export const ExpenseModal: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen((currState) => !currState)

  return (
    <ModalWrapper ref={rootRef}>
      <Button onClick={toggleModal} color={'secondary'} variant={'outlined'}>
        Add new expense
      </Button>
      <Modal
        open={open}
        onClose={toggleModal}
        disablePortal
        disableAutoFocus
        container={() => rootRef.current}
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardWrapper>
          <NewOperation onFinish={toggleModal} />
        </CardWrapper>
      </Modal>
    </ModalWrapper>
  )
}
