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
>('contacts/fetchUserContacts', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token')
    const response = await api.get<Contact[]>('/contacts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
    add: (state, action: PayloadAction<Omit<Contact, 'contactId'>>) => {
      const contactExists = state.contacts.find(
        (c) =>
          c.contactName.toLocaleLowerCase() ===
          action.payload.contactName.toLocaleLowerCase()
      )

      if (contactExists) {
        alert('O contato já existe')
      } else {
        const lastContact = state.contacts[state.contacts.length - 1]

        const newContact = {
          ...action.payload,
          contactId: lastContact ? lastContact.contactId + 1 : 1,
        }

        state.contacts.push(newContact)
      }
    },
    edit: (
      state,
      action: PayloadAction<{
        contactId: number
        contactName: string
        contactEmail: string
        contactPhone: string
      }>
    ) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.contactId === action.payload.contactId
      )
      if (contactIndex >= 0) {
        state.contacts[contactIndex] = {
          ...state.contacts[contactIndex],
          ...action.payload,
        }
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (c) => c.contactId !== action.payload
      )
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
