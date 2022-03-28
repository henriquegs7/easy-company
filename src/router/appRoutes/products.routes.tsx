import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Products, ClientDetails } from '../../pages'

export const ProductsRouter = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator>
      <Screen name="Produtos" component={Products} />
      <Screen name="Detalhes" component={ClientDetails} />
    </Navigator>
  )
}
