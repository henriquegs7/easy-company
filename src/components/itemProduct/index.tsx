import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import {
  Container,
  TitleItens,
  Information,
  ValueItemView,
  Title,
  ItemView,
  QuantityView,
  TextQuantity,
} from './styles'

interface ItemProduct {
  listAddedProducts: any
}

export const ItemProduct = ({ listAddedProducts }: ItemProduct) => {
  useEffect(() => {
    console.log(listAddedProducts)
  }, [listAddedProducts])

  return (
    <Container>
      <TitleItens>Itens Adicionados</TitleItens>
      {listAddedProducts.map(item => (
        <Information>
          <Entypo name="list" size={30} color="black" />
          <ValueItemView>
            <ItemView>
              <Title>{item.product}</Title>
              <QuantityView>
                <TextQuantity>{item.quantity} </TextQuantity>
                <TextQuantity>{item.medida}</TextQuantity>
              </QuantityView>
            </ItemView>
            <Title>R$ {item.value},00</Title>
          </ValueItemView>
        </Information>
      ))}
    </Container>
  )
}
