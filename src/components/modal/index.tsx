import React, { useState } from 'react'
import { Alert, Modal } from 'react-native'
import {
  Container,
  ModalView,
  ButtonClose,
  TextStyle,
  ModalText,
} from './styles'

interface ModallProps {
  setModalVisible: any
  modalVisible: any
}

export const Modall = ({ setModalVisible, modalVisible }: ModallProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.')
        setModalVisible(!modalVisible)
      }}>
      <Container>
        <ModalView>
          <ModalText>Item adicionado!</ModalText>
          <ButtonClose onPress={() => setModalVisible(!modalVisible)}>
            <TextStyle>OK</TextStyle>
          </ButtonClose>
        </ModalView>
      </Container>
    </Modal>
  )
}
