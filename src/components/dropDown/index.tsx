import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {
  Container,
  Title,
  ButtonList,
  Preview,
  NameFunctionary,
} from './styles'

export const DropDownItens = ({ functionaryGroup }: any) => {
  const [dropDownItem, setDropDownItem] = useState(false)

  return (
    <Container>
      <ButtonList
        onPress={() => {
          setDropDownItem(!dropDownItem)
        }}>
        <NameFunctionary>{functionaryGroup.name}</NameFunctionary>
        {dropDownItem ? (
          <MaterialIcons name="keyboard-arrow-up" size={24} color="white" />
        ) : (
          <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
        )}
      </ButtonList>
      {dropDownItem && (
        <Preview
          onPress={() => {
            // navigation.navigate('Detalhes', { functionaryGroup })
          }}>
          {functionaryGroup.functionary.map(name => (
            <>
              <Title>{name}</Title>
            </>
          ))}
        </Preview>
      )}
    </Container>
  )
}
