import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { useSelector } from 'react-redux'
import { RootState } from 'src/config/redux/store'

export function Routes() {
  const { isLogged } = useSelector((state: RootState) => state.user)

  return (
    <NavigationContainer>
      {isLogged ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
