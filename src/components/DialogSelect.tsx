import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import { FC, memo } from 'react'

interface DialogSelectProps {
  onChange(): void
  menuItemData: any[]
  open: boolean
}

const DialogSelect: FC<DialogSelectProps> = ({ onChange, menuItemData, open }) => {
  // const handleClose = (event, reason) => {
  //   if (reason !== 'backdropClick') {
  //     setOpen(false)
  //   }
  // }

  return (
    <Dialog disableEscapeKeyDown open={open}>
      <DialogContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">Остальные категории</FormLabel>
          <RadioGroup aria-label="income categories">
            {menuItemData.map((option) => (
              <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
            ))}
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions disableSpacing>
        <Button onClick={onChange}>Выбрать категорию</Button>
      </DialogActions>
    </Dialog>
  )
}

export default memo(DialogSelect)
