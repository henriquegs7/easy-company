import React, { useState } from 'react'
import { Button, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { SearchBar, DropDownItens } from '../../components'
import { FUNCTIONARY_GROUP } from '../../constants'
import { Container, FlatList } from './styles'

export const Functionary = ({ navigation }: any) => {
  const [list, setList] = useState({})

  const buttonItem = ({ item: functionaryGroup }: any) => {
    return <DropDownItens functionaryGroup={functionaryGroup} />
  }

  React.useLayoutEffect(() => {
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

  return (
    <Container>
      <SearchBar
        setResultsFound={setList}
        valueList={FUNCTIONARY_GROUP}
        title="Pesquise um grupo"
      />

      <FlatList
        data={list}
        renderItem={buttonItem}
        keyExtractor={item => item.id}
      />
      {/* isso sao o menus */}
      {/* <Title>Funcionários!</Title>
      <Title>-diarista</Title>
      <Title>-cortadores</Title>
      <Title>-cortador por diaria</Title>
      <Title>-add valores pago ao funcionario</Title>
      <Title>-operador de maquinaaaaaaaaaaaaaaaaaaaaaaaa</Title>
      <Title>-motoristaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Title> */}
    </Container>
  )
}
