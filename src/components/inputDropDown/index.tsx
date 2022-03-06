import React, { useEffect, useState } from 'react'
import { TextInput, ListItem } from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'
import {
  Container,
  Preview,
  ViewButtonsList,
  ButtonList,
  Button,
} from './styles'

interface InputDropDownPros {
  title: string
  setItemInclude?: any
  valueList: string[]
}

export const InputDropDown = ({
  title,
  valueList,
  setItemInclude,
}: InputDropDownPros) => {
  const [searchText, setSearchText] = useState('')
  const [resultsFound, setResultsFound] = useState<string[]>()
  const [hasFocus, setHasFocus] = useState(false)

  useEffect(() => {
    if (searchText === '') {
      const newList = [...valueList]

      newList.sort((itemA, itemB) =>
        itemA > itemB ? 1 : itemB > itemA ? -1 : 0,
      )
      setResultsFound(newList)
    } else {
      setResultsFound(
        valueList.filter(
          item => item.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
        ),
      )
    }
  }, [searchText, hasFocus])

  return (
    <Container style={{ elevation: 3 }}>
      <TextInput
        onFocus={() => setHasFocus(true)}
        onKeyPress={() => setHasFocus(false)}
        label={title}
        onChangeText={t => setSearchText(t)}
        value={searchText}
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
        style={{ width: 170, zIndex: 10 }}
        trailing={
          <ViewButtonsList>
            {searchText !== '' && (
              <ButtonList
                // style={{ marginRight: 10 }}
                onPress={() => setSearchText('')}>
                <MaterialIcons name="close" size={18} color="black" />
              </ButtonList>
            )}
            <ButtonList onPress={() => setHasFocus(!hasFocus)}>
              {hasFocus ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </ButtonList>
          </ViewButtonsList>
        }
      />
      {hasFocus && (
        <Preview>
          {resultsFound[0] ? (
            resultsFound?.map(name => (
              <ListItem
                onPress={() => {
                  setItemInclude(name)
                  setSearchText(name)
                  setHasFocus(false)
                }}
                elevation={24}
                title={name}
                pressEffectColor="green"
                style={{ position: 'relative' }}
              />
            ))
          ) : (
            <ListItem title="Nada encontrado" />
          )}
        </Preview>
      )}
    </Container>
  )
}
