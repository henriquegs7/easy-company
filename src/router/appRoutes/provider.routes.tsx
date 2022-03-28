import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider, ClientDetails } from '../../pages'

export const ProviderRouter = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator>
      <Screen name="Fornecedor" component={Provider} />
      <Screen name="Detalhes" component={ClientDetails} />
    </Navigator>
  )
}
