import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'
import { TextInput } from '@react-native-material/core'
import { SelectDropDown } from '../../components'
import { FORM_OF_PAYMENT } from '../../constants'
import { Container, View, TextValue, Value } from './styles'

interface SalesItem {
  cleint: string
  item: {
    medida: string
    product: string
    quantity: number
    value: number
  }[]
}

export const SalesEnd = ({ navigation, route }: any) => {
  const [discount, onChangeDiscount] = useState(0)
  const [paymentInclude, setPaymentInclude] = useState('')
  const [addressInclude, setAddressInclude] = useState('')
  const [sales, setSales] = useState<SalesItem>({} as SalesItem)
  const fullValue = sales?.item?.reduce((accumulator: number, currentItem) => {
    accumulator += currentItem.value
    return accumulator
  }, 0)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => console.log('finalizou')}
          title="Finalizar"
          color="rgb(0, 172, 74)"
        />
      ),
    })
  }, [navigation])

  useEffect(() => {
    setSales(route.params.arraySales)
  }, [sales])

  return (
    <Container>
      <TextInput
        label="Endereço"
        placeholder="Rua, numero - Bairro, Cidade - Estado, Cep"
        onChangeText={setAddressInclude}
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
      />
      <View>
        <TextInput
          label="Desconto (-R$)"
          onChangeText={onChangeDiscount}
          keyboardType="numeric"
          color="rgb(0, 172, 74)"
          selectionColor="rgb(0, 172, 74)"
          style={{ width: 170 }}
        />
        <SelectDropDown
          title="Pagamento"
          item={FORM_OF_PAYMENT}
          setItemInclude={setPaymentInclude}
        />
      </View>
      <TextValue>
        Valor total: <Value>R$ {fullValue}</Value>
      </TextValue>
      <TextInput
        label="Observação"
        onChangeText={onChangeDiscount}
        variant="outlined"
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
        multiline={true}
        numberOfLines={5}
        inputContainerStyle={{
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: 'flex-start',
        }}
      />
    </Container>
  )
}
