import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import { TextInput, Surface } from '@react-native-material/core'
import {
  SelectDropDown,
  ButtonOnclick,
  InputDropDown,
  ItemProduct,
} from '../../components'
import { CLIENT, PRODUCTS, UNIT_OF_MEASUREMENT } from '../../constants'
import { Container, View, TitleValue, Value, ViewADD } from './styles'

export const Sales = ({ navigation }: any) => {
  const [addItems, setAddItems] = useState(true)
  const [enableNextPage, setEnableNextPage] = useState(true)
  const [clientInclude, setClientInclude] = useState('')
  const [productInclude, setProductInclude] = useState('')
  const [medidaInclude, setMedidaInclude] = useState('')
  const [quantity, onChangeQuantity] = useState(0)
  const [value, setChangeValue] = useState(0)
  const [listAddedProducts, setListAddedProducts] = useState<any[]>([])
  const totalItemValue = Number(quantity * value)
  const clientName: any[] = []
  CLIENT.map(item => clientName.push(item.name))

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          disabled={enableNextPage}
          onPress={() => {
            const arraySales = {
              cleint: clientInclude,
              item: listAddedProducts,
            }

            navigation.navigate('Final da venda', { arraySales })
          }}
          title="Próximo"
          color="rgb(0, 172, 74)"
        />
      ),
    })
  }, [navigation, listAddedProducts])

  useEffect(() => {}, [listAddedProducts])

  const additem = () => {
    const item = {
      product: productInclude,
      quantity: quantity,
      medida: medidaInclude,
      value: totalItemValue,
    }
    setEnableNextPage(false)
    setListAddedProducts([item, ...listAddedProducts])
  }

  return (
    <Container>
      <View>
        <InputDropDown
          title="Cliente"
          valueList={clientName}
          setItemInclude={setClientInclude}
        />
        <InputDropDown
          title="Produto"
          valueList={PRODUCTS}
          setItemInclude={setProductInclude}
        />
      </View>
      <View style={{ zIndex: -1 }}>
        <TextInput
          label="Quantidade"
          onChangeText={onChangeQuantity}
          keyboardType="numeric"
          color="rgb(0, 172, 74)"
          selectionColor="rgb(0, 172, 74)"
          style={{ width: 170 }}
        />
        <SelectDropDown
          item={UNIT_OF_MEASUREMENT}
          setItemInclude={setMedidaInclude}
        />
      </View>
      <View style={{ zIndex: -1 }}>
        <TextInput
          label="Valor unitário (R$)"
          onChangeText={setChangeValue}
          keyboardType="numeric"
          color="rgb(0, 172, 74)"
          selectionColor="rgb(0, 172, 74)"
          style={{ width: 170 }}
        />
        <TitleValue style={{ width: 170 }}>
          Total Item: <Value>R$ {totalItemValue}</Value>
        </TitleValue>
      </View>
      <ViewADD style={{ zIndex: -1 }}>
        <ButtonOnclick
          title=" + ADD ITEM"
          setChangeState={setAddItems}
          status={addItems}
          functionValue={additem}
        />
      </ViewADD>
      <ItemProduct listAddedProducts={listAddedProducts} />
    </Container>
  )
}
