import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { useDispatch } from 'react-redux'
import {
  getAuth,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithCredential,
  GoogleAuthProvider,
} from 'firebase/auth'
import { TextInput } from '@react-native-material/core'
import * as Facebook from 'expo-facebook'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons'
import { changeUser } from '../../config/redux/userSlice'
import app from '../../config/firebase'
import {
  KeyboardAvoidingView,
  Title,
  PreviewPassword,
  ErrorView,
  ErrorText,
  LoginButton,
  LoginText,
  ViewText,
  Line,
  Text,
  ButtonsContainer,
  LoginWith,
} from './styles'
import * as Google from 'expo-auth-session/providers/google'

export const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState(false)
  const [previewPassword, setPreviewPassword] = useState(true)
  const [errorMessage, setErrorMessage] = useState(
    'Email ou senha está invalido',
  )
  const auth = getAuth(app)
  const dispatch = useDispatch()

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    //TODO: fix this key to real one and setting up the SHA fingerprint
    clientId:
      'com.googleusercontent.apps.663279025904-j909s6m6l011qgcl7gpcs8etfut3lust',
  })

  useEffect(() => {
    console.log('RESPONSE')
    if (response?.type === 'success') {
      const { id_token } = response.params

      const auth = getAuth()
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])

  const loginFirebase = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      dispatch(changeUser(response))
      setErrorLogin(false)
    } catch (error) {
      setErrorLogin(true)
    }
  }

  const loginFacebook = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '4732688426858478',
      })
      const { type, token }: any = await Facebook.logInWithReadPermissionsAsync(
        {
          permissions: ['public_profile'],
        },
      )
      if (type === 'success') {
        const credential = FacebookAuthProvider.credential(token)
        const response = await signInWithCredential(auth, credential)
        dispatch(changeUser(response.user))
        setErrorLogin(false)
      }
    } catch (error) {
      setErrorMessage('Não foi possivel entrar com Facebook')
      setErrorLogin(true)
    }
  }

  const loginGoogle = async () => {
    try {
      // const user = await GoogleSignin.signIn()
      // console.log(user)/
      // if (type === 'success') {
      //   const credential = GoogleAuthProvider.credential(token)
      //   const response = await signInWithCredential(auth, credential)
      //   console.log(response.user)
      //   dispatch(changeUser(response.user))
      //   setErrorLogin(false)
      // }
    } catch (error) {
      setErrorMessage('Não foi possivel entrar com Google')
      setErrorLogin(true)
      console.error({ error })
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ padding: Platform.OS === 'ios' ? 0 : 50 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Title>easyCompanpy</Title>
      <TextInput
        variant="standard"
        label="Email ou Nome de usuario"
        onChangeText={text => setEmail(text)}
        value={email}
        style={{
          width: 300,
          marginBottom: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
      />
      <TextInput
        variant="standard"
        label="Senha"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={previewPassword}
        style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
        trailing={props => (
          <PreviewPassword onPress={() => setPreviewPassword(!previewPassword)}>
            {previewPassword ? (
              <Ionicons name="eye" size={24} color="black" />
            ) : (
              <Ionicons name="eye-off" size={24} color="black" />
            )}
          </PreviewPassword>
        )}
      />
      {errorLogin && (
        <ErrorView>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#db7070b9"
          />
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorView>
      )}
      <LoginButton onPress={loginFirebase} disabled={!!!email && !!!password}>
        <LoginText>ENTRAR</LoginText>
      </LoginButton>
      <ViewText>
        <Line />
        <Text>ou</Text>
        <Line />
      </ViewText>
      <ButtonsContainer>
        <LoginWith
          style={{ backgroundColor: '#3b5998' }}
          onPress={loginFacebook}>
          <FontAwesome name="facebook-square" size={24} color="white" />
        </LoginWith>
        <LoginWith
          style={{ backgroundColor: '#db4a39' }}
          onPress={() => {
            promptAsync()
          }}>
          <AntDesign name="googleplus" size={24} color="white" />
        </LoginWith>
      </ButtonsContainer>
    </KeyboardAvoidingView>
  )
}
