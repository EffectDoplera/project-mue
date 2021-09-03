import { Button, withStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

const SuccessButton = withStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button)

export default SuccessButton
