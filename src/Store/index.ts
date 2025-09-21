import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact'
import filterReducer from './reducers/filtro'
import sidebarReducer from './reducers/sidebar'
import authReducer from './reducers/auth'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
  },
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
