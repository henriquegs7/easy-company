import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  margin-bottom: 5px;
`
export const ButtonList = styled.TouchableOpacity`
  align-items: center;
  background-color: rgba(0, 172, 75, 0.459);
  border-radius: 10px;
  flex-direction: row;
  height: 65px;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
`

export const NameFunctionary = styled.Text`
  /* color: white; */
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
`

export const Preview = styled.TouchableOpacity`
  background-color: rgba(30, 139, 77, 0.3);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px;
  padding-left: 15px;
  width: 95%;
`

export const Title = styled.Text`
  align-items: center;
  /* color: white; */
  font-size: 14px;
  justify-content: center;
`
