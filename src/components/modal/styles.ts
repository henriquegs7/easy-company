import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalView = styled.View`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  margin: 20px;
  padding: 35px;
  /* box-shadow: #000;
  shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4, */
  elevation: 5;
`

// const styles = StyleSheet.create({
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
// });

export const ButtonClose = styled.Pressable`
  border-radius: 20px;
  padding: 10px;
  background-color: rgb(0, 172, 74);
`

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`

export const ModalText = styled.Text`
  margin-bottom: 16px;
  font-weight: 500;
  text-align: center;
`
