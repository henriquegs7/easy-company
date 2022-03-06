import React, { useState, useLayoutEffect, useEffect } from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import {
  Avatar,
  ListItem,
  Provider,
  Stack,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  TextInput,
} from '@react-native-material/core'
import { SearchBar } from '@components'
import { PRODUCTS } from '@constants'
import { Container, FlatList, AddProduct } from './styles'
import { TouchableOpacity } from 'react-native'

interface ProductsPros {
  id: number
  title: string
}

export const Products = ({ navigation }: any) => {
  const [visible, setVisible] = useState(false)
  const [productAdd, setProductAdd] = useState('')
  const [list, setList] = useState({})

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddProduct onPress={() => setVisible(true)}>
          <MaterialIcons
            name="playlist-add"
            size={30}
            color="rgb(0, 172, 74)"
          />
        </AddProduct>
      ),
    })
  }, [navigation])

  useEffect(() => {}, [PRODUCTS])

  const rightSwipeActions = product => {
    return (
      <TouchableOpacity
        onPress={() => PRODUCTS.slice(product.id)}
        style={{
          backgroundColor: '#fc6b60',
          justifyContent: 'center',
          alignItems: 'center',
          width: 70,
        }}>
        <MaterialCommunityIcons name="delete-empty" size={28} color="white" />
      </TouchableOpacity>
    )
  }

  const handleProduct = ({ item: product }: any) => {
    return (
      <Swipeable renderRightActions={() => rightSwipeActions(product)}>
        <ListItem
          leadingMode="avatar"
          leading={
            <Avatar
              label={product.title}
              color="rgb(0, 172, 74)"
              tintColor="white"
              size={50}
            />
          }
          title={product.title}
          secondaryText={`Item ${product.id}`}
        />
      </Swipeable>
    )
  }

  return (
    <Container>
      <SearchBar
        setResultsFound={setList}
        valueList={PRODUCTS}
        title="Pesquise um cliente"
      />
      <FlatList
        data={PRODUCTS}
        renderItem={handleProduct}
        keyExtractor={item => item.id}
      />
      <Provider>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <DialogHeader title="Novo produto" />
          <DialogContent>
            <Stack spacing={2}>
              <TextInput
                label="Nome do Produto"
                variant="standard"
                onChangeText={setProductAdd}
                color="rgb(0, 172, 74)"
                selectionColor="rgb(0, 172, 74)"
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              title="Cancel"
              variant="outlined"
              onPress={() => setVisible(false)}
              color="rgb(0, 172, 74)"
            />
            <Button
              title="Ok"
              onPress={() => {
                PRODUCTS.push({ id: PRODUCTS.length, title: productAdd })
                setVisible(false)
              }}
              color="rgb(0, 172, 74)"
              tintColor="#FFF"
            />
          </DialogActions>
        </Dialog>
      </Provider>
    </Container>
  )
}
