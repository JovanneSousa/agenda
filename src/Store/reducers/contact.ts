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

export const addContact = createAsyncThunk<
  Contact,
  { name: string; email: string; phone: string },
  { rejectValue: string }
>('/contacts/addContact', async (contactData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token')
    const response = await api.post<Contact>('/contacts', contactData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data.message || 'Não foi possivel adicionar o contato'
    )
  }
})

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

      .addCase(addContact.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false
        state.contacts.push(action.payload)
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Erro desconhecido ao adicionar contato'
      })
  },
})

export const { edit, remove } = contactSlice.actions

export default contactSlice.reducer
