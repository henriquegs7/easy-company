import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Sales, SalesEnd } from '../pages'

export const HomeRouter = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Inicio da venda" component={Sales} />
      <Screen name="Final da venda" component={SalesEnd} />
    </Navigator>
  )
}
