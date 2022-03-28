import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Functionary, ClientDetails } from '../../pages'

export const FunctionaryRouter = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator>
      <Screen name="Funcionários" component={Functionary} />
      <Screen name="Detalhes" component={ClientDetails} />
    </Navigator>
  )
}
