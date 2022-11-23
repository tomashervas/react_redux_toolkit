import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counterSlice'
import { pokemonSlice } from './slices/pokemonSlice'
import { todoSlice } from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
    pokemon: pokemonSlice.reducer
  },
})