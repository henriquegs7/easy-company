import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { PhotoUser, ListForm } from '../../components'
import { Provider, Products } from '..'
import {
  Container,
  UserInformation,
  ContainerPhoto,
  InfoText,
  FlatList,
  VehicleItems,
  AddVehicle,
} from './styles'

// colocar e tela com històrico de venda do cliente exibir
// anexo de vale, ter observaçoes

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

export const ClientDetails = ({ navigation, route }: any) => {
  const { Navigator, Screen } = createMaterialTopTabNavigator()
  const [edit, setEdit] = React.useState(false)
  const [client, setClient] = useState({})

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setEdit(!edit)}
          title="editar"
          color={edit ? 'rgb(0, 172, 74)' : 'rgb(139, 139, 139)'}
        />
      ),
    })
  }, [navigation, edit])

  useEffect(() => {
    setClient(route.params.client)
  })

  const ListVehicles = () => {
    const ClientVehicles = ({ item: vehicles }: any) =>
      vehicles && (
        <VehicleItems>
          <ListForm
            title="Motorista"
            status={edit}
            placeholder={vehicles.motorista}
          />
          <ListForm title="Placa" status={edit} placeholder={vehicles.placa} />
          <ListForm
            title="Município"
            status={edit}
            placeholder={vehicles.municipio}
          />
          <ListForm
            title="Peso bruto"
            status={edit}
            placeholder={vehicles.pesoBruto}
            type="numeric"
          />
          <ListForm
            title="Peso liquido"
            status={edit}
            placeholder={vehicles.pesoLiquido}
            type="numeric"
          />
        </VehicleItems>
      )

    return (
      <FlatList
        data={client.veiculos}
        renderItem={ClientVehicles}
        keyExtractor={item => item.id}
      />
    )
  }

  return (
    <Container>
      <UserInformation>
        <ContainerPhoto>
          <PhotoUser iten="" />
        </ContainerPhoto>
        <InfoText>
          <ListForm title="Nome" status={edit} placeholder={client.name} />
          <ListForm
            title="Data de Nascimento"
            status={edit}
            placeholder={client.dataNascimento}
            type="numeric"
          />
          <ListForm
            title="Celular"
            status={edit}
            placeholder={client.celular}
            type="numeric"
          />
          <ListForm title="Email" status={edit} placeholder={client.email} />
          <ListForm
            title="Endereço"
            status={edit}
            placeholder={client.endereço}
          />
        </InfoText>
      </UserInformation>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: 'rgb(0, 172, 74)',
        }}>
        <Screen name="Vendas" component={SettingsScreen} />
        <Screen name="Veiculos" component={ListVehicles} />
      </Navigator>
    </Container>
  )
}
