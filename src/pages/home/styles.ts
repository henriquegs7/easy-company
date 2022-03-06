import styled from 'styled-components/native'

export const Container = styled.SafeAreaView``

export const Header = styled.View`
  align-items: center;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 2px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`
export const TitleView = styled.View`
  align-items: center;
  flex-direction: row;
`

export const SalesMade = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

export const Title = styled.Text`
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
`

export const ButtonSales = styled.TouchableOpacity`
  align-items: center;
  border-radius: 100px;
  height: 45px;
  justify-content: center;
  width: 45px;
`
