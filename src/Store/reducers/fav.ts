import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type FavState = {
  contact: Contact[]
}

const initialState: FavState = {
  contact: [
    {
      email: 'Contato 3',
      fullName: 'Teste 3',
      number: 123456789,
    },
    {
      email: 'Contato 4',
      fullName: 'Teste 4',
      number: 123456789,
    },
  ],
}

const favSlice = createSlice({
  name: 'stars',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Contact>) => {
      const contact = state.contact.find(
        (c) => c.fullName === action.payload.fullName
      )
      if (!contact) {
        state.contact.push(action.payload)
      } else {
        alert('O contato já é favorito')
      }
    },
  },
})

export const { add } = favSlice.actions

export default favSlice.reducer
