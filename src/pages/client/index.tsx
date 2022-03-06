import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { ListItem, Avatar } from '@react-native-material/core'
import { SearchBar } from '@components'
import { CLIENT } from '@constants'
import { Container, FlatList } from './styles'

export const Client = ({ navigation }: any) => {
  const [list, setList] = useState({})

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Final da venda', { arraySales })
          }}>
          <AntDesign name="adduser" size={28} color="rgb(0, 172, 74)" />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  const buttonItem = ({ item: client }: any) => {
    return (
      <ListItem
        leadingMode="avatar"
        onPress={() => {
          navigation.navigate('Detalhes', { client })
        }}
        leading={
          <Avatar
            label={client.name}
            color="rgb(0, 172, 74)"
            tintColor="white"
          />
        }
        title={client.name}
        secondaryText="Do you have Paris recommendations? Have you ever…"
      />
    )
  }

  return (
    <Container>
      <SearchBar
        setResultsFound={setList}
        valueList={CLIENT}
        title="Pesquise um cliente"
      />
      <FlatList
        data={list}
        renderItem={buttonItem}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}
