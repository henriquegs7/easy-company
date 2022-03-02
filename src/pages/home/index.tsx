import * as React from 'react'
import { View, Text } from 'react-native'
import { PhotoUser } from '@components'
import { MaterialIcons } from '@expo/vector-icons'
import {
  Container,
  Title,
  ButtonSales,
  Header,
  SalesMade,
  Content,
  SalesHistory,
} from './styles'

interface HomePros {
  name: string
  navigation: any
}

export const Home = ({ navigation, name }: HomePros) => {
  return (
    <Container>
      <Header>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <PhotoUser iten={''} />
          <Title>Olá, Henrique {name}</Title>
        </View>
        <ButtonSales
          onPress={() => {
            navigation.navigate('Inicio da venda')
          }}>
          <MaterialIcons name="add-shopping-cart" size={28} color="#FFF" />
        </ButtonSales>
      </Header>
      <SalesMade>
        <View>
          <Text style={{ fontSize: 14, color: 'white' }}>Vendas da Semana</Text>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            R$ 10.000,00
          </Text>
        </View>
        <SalesHistory>
          <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
            Conferir Vendas
          </Text>
        </SalesHistory>
      </SalesMade>
      <Content></Content>
    </Container>
  )
}

{
  /* 
import { MotiText, MotiView, useAnimationState } from 'moti'
  <MotiView
state={toggleState}
transition={{ type: "timing", duration: 500 }}
>
<TextInput placeholder="Pesquisar" />
</MotiView>
<TouchableOpacity
onPress={() => {
  const nextState =
    toggleState.current === "open" ? "closed" : "open";
  toggleState.transitionTo(nextState);
}}
>
<IconSearch source={Search} />
</TouchableOpacity> */
}
