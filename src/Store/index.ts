import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact'
import favReducer from './reducers/fav'
import filtroReducer from './reducers/filtro'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    favorites: favReducer,
    filtro: filtroReducer,
  },
})

export type RootReducer = ReturnType<typeof store.getState>
