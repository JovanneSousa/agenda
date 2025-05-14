import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      email: 'Contato 1',
      fullName: 'Teste 1',
      number: 123456789,
    },
    {
      id: 2,
      email: 'Contato 2',
      fullName: 'Teste 2',
      number: 123456789,
    },
    {
      id: 3,
      email: 'Contato 3',
      fullName: 'Teste 3',
      number: 123456789,
    },
    {
      id: 4,
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
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactExists = state.contacts.find(
        (c) =>
          c.fullName.toLocaleLowerCase() ==
          action.payload.fullName.toLocaleLowerCase()
      )

      if (contactExists) {
        alert('O contato ja existe')
      } else {
        const lastContact = state.contacts[state.contacts.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1,
        }

        state.contacts.push(newContact)
      }
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.contacts.findIndex(
        (t) => t.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.contacts[contactIndex] = action.payload
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.contacts = [
        ...state.contacts.filter((c) => c.id !== action.payload),
      ]
    },
  },
})

export const { add, edit, remove } = contactSlice.actions

export default contactSlice.reducer
