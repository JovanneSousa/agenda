import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type ContactState = {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: [
    {
      email: 'Contato 1',
      fullName: 'Teste 1',
      number: 123456789,
    },
    {
      email: 'Contato 2',
      fullName: 'Teste 2',
      number: 123456789,
    },
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

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Contact>) => {
      const contact = state.contacts.find(
        (c) => c.fullName === action.payload.fullName
      )
      if (!contact) {
        state.contacts.push(action.payload)
      } else {
        alert('O contato já existe')
      }
    },
  },
})

export const { add } = contactSlice.actions

export default contactSlice.reducer
