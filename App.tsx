import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { Router } from './src/router'

export default function App() {
  const scheme = '' //'dark'
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/*theme={scheme === 'dark' ? DarkTheme : DefaultTheme} */}
        <Router />
        {/* <StatusBar /> */}
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
