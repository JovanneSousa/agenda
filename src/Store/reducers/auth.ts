import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://agenda-api-production-76af.up.railway.app/auth'

interface LoginResponse {
  username: string
  token: string
}

interface RegisterResponse {
  username: string
  token: string
}

interface AuthState {
  username: string | null
  token: string | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  username: null,
  token: localStorage.getItem('token'),
  loading: false,
  error: null,
}

export const login = createAsyncThunk<
  LoginResponse,
  { username: string; password: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_URL}/login`,
      credentials
    )
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Erro no login')
  }
})

export const register = createAsyncThunk<
  RegisterResponse,
  { username: string; name: string; email: string; password: string }
>('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${API_URL}/register`,
      userData
    )
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Erro no cadastro')
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.username = null
      state.token = null
      localStorage.removeItem('token')
    },
    clearError(state) {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    const setPending = (state: AuthState) => {
      state.loading = true
      state.error = null
    }
    const setRejected = (state: AuthState, action: PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload
    }

    builder
      .addCase(login.pending, setPending)
      .addCase(register.pending, setPending)

      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false
          state.username = action.payload.username
          state.token = action.payload.token
          localStorage.setItem('token', action.payload.token)
        }
      )
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<RegisterResponse>) => {
          state.loading = false
          state.username = action.payload.username
          state.token = action.payload.token
          localStorage.setItem('token', action.payload.token)
        }
      )

      .addCase(login.rejected, setRejected)
      .addCase(register.rejected, setRejected)
  },
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer
