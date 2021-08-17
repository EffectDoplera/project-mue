import React from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'

export const Char = () => {
  const data = [
    {
      subject: 'Отпуск',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Выдача наличных',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Коммунальные услуги',
      A: 86,
      B: 130,
      fullMark: 150,
    },
  ]

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='subject' />
        <PolarRadiusAxis />
        <Radar
          name='Mike'
          dataKey='A'
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
