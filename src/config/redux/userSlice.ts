import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

export const slice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, user: payload }
    },
    logout(state) {
      return { ...state, isLogged: false, user: '' }
    },
  },
})

export const { changeUser, logout } = slice.actions

export default slice.reducer
