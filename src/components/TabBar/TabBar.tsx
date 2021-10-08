import { Tab, Tabs } from '@mui/material'
import React, { FC } from 'react'

interface ITabBarProps {
  tabNames: string[]
  currentTab: number
  changeTab: (event: object, value: number) => void
}

const TabBar: FC<ITabBarProps> = ({ tabNames, currentTab, changeTab }) => {
  return (
    <Tabs value={currentTab} onChange={changeTab} centered variant="fullWidth" indicatorColor="primary">
      {tabNames.map((tabName, index) => (
        <Tab label={tabName} key={index} />
      ))}
    </Tabs>
  )
}

export default TabBar
