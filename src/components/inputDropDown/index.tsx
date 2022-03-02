import React, { useEffect, useState } from 'react'
import { TextInput, ListItem } from '@react-native-material/core'
import { MotiView, MotiText, AnimatePresence } from 'moti'
import { Container, Preview } from './styles'

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
  const [selectedProduct, setSelectedProduct] = useState(false)

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
  }, [searchText, selectedProduct])

  return (
    <Container>
      <TextInput
        onFocus={() => setSelectedProduct(!selectedProduct)}
        label={title}
        onChangeText={t => setSearchText(t)}
        value={searchText}
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
        style={{ width: 170, zIndex: 10 }}
      />
      {selectedProduct && (
        <Preview>
          {resultsFound?.map(name => (
            <ListItem
              onPress={() => {
                setSelectedProduct(false)
                setItemInclude(name)
                setSearchText(name)
              }}
              title={name}
              pressEffectColor="green"
            />
          ))}
        </Preview>
      )}
    </Container>
  )
}
