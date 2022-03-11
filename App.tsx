import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Router } from './src/router'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  )
}
