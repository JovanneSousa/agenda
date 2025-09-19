import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact'
import filterReducer from './reducers/filtro'
import sidebarReducer from './reducers/sidebar'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
    sidebar: sidebarReducer,
  },
})

export type RootReducer = ReturnType<typeof store.getState>
