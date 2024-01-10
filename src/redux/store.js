import { configureStore } from '@reduxjs/toolkit'
import translateSlice from './slices/translateSlice'

export const store = configureStore({
  reducer: {
    translate: translateSlice,
  },
})