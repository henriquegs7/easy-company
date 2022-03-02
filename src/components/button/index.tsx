import React from 'react'
import { ButtonOn, Text } from './styles'

interface ButtonPros {
  title: string
  setChangeState: (status: boolean) => void
  status: boolean
  functionValue: () => void
}

export const ButtonOnclick = ({
  title,
  setChangeState,
  status,
  functionValue,
}: ButtonPros) => {
  return (
    <ButtonOn
      onPress={() => {
        functionValue()
        setChangeState(!status)
      }}>
      <Text>{title}</Text>
    </ButtonOn>
  )
}
