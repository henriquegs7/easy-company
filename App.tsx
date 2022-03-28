import React from 'react'
import { SafeAreaView } from 'react-native'
import { Routes } from './src/router'
import { Provider } from 'react-redux'
import { store } from './src/config/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </Provider>
  )
}
