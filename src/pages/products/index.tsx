import React, { useState, useLayoutEffect } from 'react'
import { ListRenderItemInfo, TouchableOpacity } from 'react-native'
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

interface ProductType {
  id: number
  name: string
}

export const Products = ({ navigation }: any) => {
  const [visible, setVisible] = useState(false)
  const [productAdd, setProductAdd] = useState('')
  const [listProduct, setListProduct] = useState<ProductType[]>([])

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

  const rightSwipeActions = (product: ProductType) => {
    return (
      <TouchableOpacity
        onPress={() =>
          setListProduct(
            listProduct.filter(productList => productList.id !== product.id),
          )
        }
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

  const handleProduct = ({
    item: product,
    index,
  }: ListRenderItemInfo<ProductType>) => {
    return (
      <Swipeable renderRightActions={() => rightSwipeActions(product)}>
        <ListItem
          leadingMode="avatar"
          leading={
            <Avatar
              label={product.name}
              color="rgb(0, 172, 74)"
              tintColor="white"
              size={50}
            />
          }
          title={product.name}
          secondaryText={`Item ${index + 1}`}
        />
      </Swipeable>
    )
  }

  return (
    <Container>
      <SearchBar
        setResultsFound={setListProduct}
        valueList={PRODUCTS}
        title="Pesquise um cliente"
      />
      <FlatList
        data={listProduct}
        renderItem={handleProduct}
        keyExtractor={item => item.id}
      />
      <Provider>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <DialogHeader title="Novo produto" />
          <DialogContent>
            {/* <Stack spacing={2}> */}
            <TextInput
              label="Nome do Produto"
              variant="standard"
              onChangeText={setProductAdd}
              color="rgb(0, 172, 74)"
              selectionColor="rgb(0, 172, 74)"
            />
            {/* </Stack> */}
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
                try {
                  listProduct.push({
                    id: listProduct.length,
                    name: productAdd,
                  })
                  setVisible(false)
                } catch (error) {
                  console.log('deu erro')
                }
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
