import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, Feather, AntDesign } from '@expo/vector-icons'
import {
  ClientRouter,
  FunctionaryRouter,
  HomeRouter,
  ProductsRouter,
  ProviderRouter,
} from './appRoutes/index'

const { Navigator, Screen } = createBottomTabNavigator()

type TabIconType = {
  focused: boolean
  color: string
  size: number
}

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: 'rgb(19,20,24)',
          borderTopColor: 'transparent',
        },
        headerStyle: {
          backgroundColor: 'rgb(20,20,20)',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: 'rgb(0, 172, 74)',
        tabBarInactiveTintColor: '#777',
      })}>
      <Screen
        name="Funcionários"
        component={FunctionaryRouter}
        options={{
          tabBarIcon: ({ color, size }: TabIconType) => {
            return <Entypo name="v-card" size={size} color={color} />
          },
          tabBarBadge: 5,
        }}
      />
      <Screen
        name="Clientes"
        component={ClientRouter}
        options={{
          tabBarIcon: ({ color, size }: TabIconType) => {
            return <Feather name="users" size={size} color={color} />
          },
        }}
      />
      <Screen
        name="Home"
        component={HomeRouter}
        options={() => ({
          tabBarLabel: '',
          tabBarIcon: ({ size }: TabIconType) => (
            <View>
              <LinearGradient
                style={styles.iconTabRound}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={['rgb(0, 172, 74)', 'rgb(0, 102, 4)']}>
                <AntDesign name="home" size={size} color="#FFF" />
              </LinearGradient>
            </View>
          ),
        })}
      />
      <Screen
        name="Produtos"
        component={ProductsRouter}
        options={{
          tabBarIcon: ({ color, size }: TabIconType) => {
            return <Feather name="package" size={size} color={color} />
          },
        }}
      />
      <Screen
        name="Fornecedor"
        component={ProviderRouter}
        options={{
          tabBarIcon: ({ color, size }: TabIconType) => {
            return <Feather name="truck" size={size} color={color} />
          },
        }}
      />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
