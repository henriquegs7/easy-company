import * as React from 'react'
import { View, Text } from 'react-native'
import {
  Backdrop,
  BackdropSubheader,
  Avatar,
} from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import {
  Container,
  Header,
  TitleView,
  SalesMade,
  Title,
  ButtonSales,
} from './styles'
import { RootState } from '../../config/redux/store'

interface HomePros {
  name: string
  navigation: any
}

export const Home = ({ navigation, name }: HomePros) => {
  const { user } = useSelector((state: RootState) => state.user)
  console.log(user)

  return (
    <Backdrop
      revealed={true}
      style={{ padding: 10, backgroundColor: 'rgb(0, 78, 34)' }}
      header={
        <Container>
          <Header>
            <TitleView>
              <Avatar image={{ uri: user.photoURL }} />
              <Title>Olá, {user.displayName}</Title>
            </TitleView>
            <ButtonSales
              onPress={() => {
                navigation.navigate('Inicio da venda')
              }}>
              <MaterialIcons name="add-shopping-cart" size={28} color="#FFF" />
            </ButtonSales>
          </Header>
          <SalesMade>
            <Text style={{ color: 'white' }}>Vendas da Semana</Text>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
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
