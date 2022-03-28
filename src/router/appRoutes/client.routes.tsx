import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Client, ClientDetails } from '../../pages'

export const ClientRouter = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator>
      <Screen name="Clientes" component={Client} />
      <Screen name="Detalhes" component={ClientDetails} />
    </Navigator>
  )
}
