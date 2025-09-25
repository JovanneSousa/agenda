import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import api from '../../services/api'

type ContactState = {
  contacts: Contact[]
  loading: boolean
  error: string | null
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: null,
}

export const fetchUserContacts = createAsyncThunk<
  Contact[],
  void,
  { rejectValue: string }
>('contacts/fetchUserContacs', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token')
    const response = await api.get<Contact[]>(
      '/contacts',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || 'Erro ao carregar contatos'
    )
  }
})

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
      state.contacts = state.contacts.filter((c) => c.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserContacts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserContacts.fulfilled, (state, action) => {
        state.loading = false
        state.contacts = action.payload
      })
      .addCase(fetchUserContacts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Erro desconhecido'
      })
  },
})

export const { add, edit, remove } = contactSlice.actions

export default contactSlice.reducer
