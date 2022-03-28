import React from 'react'
import { StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import { Container } from './styles'

interface SelectProps {
  item: any
  setItemInclude: any
  setSelectedItem?: any
  title?: string
}

export const SelectDropDown = ({
  item,
  setItemInclude,
  setSelectedItem,
  title,
}: SelectProps) => {
  return (
    <Container>
      <SelectDropdown
        data={item}
        // defaultValueByIndex={1}
        // defaultValue={'Draga'}
        onSelect={(ItemSelected, index) => {
          console.log(ItemSelected, index)
          setItemInclude(ItemSelected)
          item[0] === 'Draga' && setSelectedItem(ItemSelected)
        }}
        defaultButtonText={`${title ? title : 'Selecione'}`}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          {
            return isOpened ? (
              <MaterialIcons name="keyboard-arrow-up" size={18} color="#444" />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#444"
              />
            )
          }
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    height: 35,
    width: 170,
    // backgroundColor: '#FFF',
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
  dropdown1DropdownStyle: {
    backgroundColor: '#000',
    borderRadius: 10,
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
})
