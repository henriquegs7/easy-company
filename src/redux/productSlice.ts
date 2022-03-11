import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'product',
  initialState: {
    id: 0,
    name: '',
  },
  reducers: {
    changeProduct(state, { payload }) {
      return { ...state, name: payload }
    },
  },
})

export const { changeProduct } = slice.actions

export const selectProduct = (state: any) => state.name

export default slice.reducer
