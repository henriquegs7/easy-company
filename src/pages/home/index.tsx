import * as React from 'react'
import { View, Text } from 'react-native'
import {
  Backdrop,
  BackdropSubheader,
  Avatar,
} from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'
import { PhotoUser } from '@components'
import {
  Container,
  Header,
  TitleView,
  SalesMade,
  Title,
  ButtonSales,
} from './styles'

interface HomePros {
  name: string
  navigation: any
}

export const Home = ({ navigation, name }: HomePros) => {
  return (
    <Backdrop
      revealed={true}
      style={{ padding: 10, backgroundColor: 'rgb(0, 78, 34)' }}
      header={
        <Container>
          <Header>
            <TitleView>
              <Avatar
                image={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }}
              />
              <Title>Olá, Henrique {name}</Title>
            </TitleView>
            <ButtonSales
              onPress={() => {
                navigation.navigate('Inicio da venda')
              }}>
              <MaterialIcons name="add-shopping-cart" size={28} color="#FFF" />
            </ButtonSales>
          </Header>
          <SalesMade>
            <Text style={{ fontSize: 16, color: 'white' }}>
              Vendas da Semana
            </Text>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
              R$ 10.000,00
            </Text>
          </SalesMade>
        </Container>
      }
      backLayer={<View style={{ height: 40 }} />}>
      <BackdropSubheader title="Subheader" />
    </Backdrop>
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
