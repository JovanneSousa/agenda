import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact'
import favReducer from './reducers/fav'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    favorites: favReducer,
  },
})

export type RootReducer = ReturnType<typeof store.getState>
