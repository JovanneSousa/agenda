import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      email: 'contato1@email.com',
      fullName: 'Ana Silva',
      number: 11987654321,
    },
    {
      id: 2,
      email: 'contato2@email.com',
      fullName: 'Bruno Oliveira',
      number: 11991234567,
    },
    {
      id: 3,
      email: 'contato3@email.com',
      fullName: 'Carla Souza',
      number: 21998765432,
    },
    {
      id: 4,
      email: 'contato4@email.com',
      fullName: 'Daniel Lima',
      number: 31992345678,
    },
    {
      id: 5,
      email: 'contato5@email.com',
      fullName: 'Eduarda Costa',
      number: 11999887766,
    },
    {
      id: 6,
      email: 'contato1@email.com',
      fullName: 'Ana Silva',
      number: 11987654321,
    },
    {
      id: 7,
      email: 'contato2@email.com',
      fullName: 'Bruno Oliveira',
      number: 11991234567,
    },
    {
      id: 8,
      email: 'contato3@email.com',
      fullName: 'Carla Souza',
      number: 21998765432,
    },
    {
      id: 9,
      email: 'contato4@email.com',
      fullName: 'Daniel Lima',
      number: 31992345678,
    },
    {
      id: 10,
      email: 'contato5@email.com',
      fullName: 'Eduarda Costa',
      number: 11999887766,
    },
    {
      id: 11,
      email: 'contato1@email.com',
      fullName: 'Ana Silva',
      number: 11987654321,
    },
    {
      id: 12,
      email: 'contato2@email.com',
      fullName: 'Bruno Oliveira',
      number: 11991234567,
    },
    {
      id: 13,
      email: 'contato3@email.com',
      fullName: 'Carla Souza',
      number: 21998765432,
    },
    {
      id: 14,
      email: 'contato4@email.com',
      fullName: 'Daniel Lima',
      number: 31992345678,
    },
    {
      id: 15,
      email: 'contato5@email.com',
      fullName: 'Eduarda Costa',
      number: 11999887766,
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
