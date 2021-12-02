import { Card, CardContent, CardHeader, Divider } from '@mui/material'
import { forwardRef } from 'react'

interface MainCardProps {
  title?: string
}

export const MainCard = forwardRef<HTMLDivElement, MainCardProps>(({ children, title, ...other }, ref) => {
  return (
    <Card ref={ref} sx={{ borderRadius: 3 }} {...other}>
      {title && <CardHeader title={title} />}

      {title && <Divider />}

      <CardContent>{children}</CardContent>
    </Card>
  )
})

MainCard.displayName = 'MainCard'
