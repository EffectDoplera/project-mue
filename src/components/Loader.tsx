import { CircularProgress, Stack, Typography } from '@mui/material'
import { FC } from 'react'

const Loader: FC = () => (
  <Stack alignItems={'center'} justifyContent={'center'} flexShrink={0} flexGrow={1} height={'80vh'} gap={1}>
    <CircularProgress disableShrink size={'5rem'} />
    <Typography>Loading...</Typography>
  </Stack>
)

export default Loader
