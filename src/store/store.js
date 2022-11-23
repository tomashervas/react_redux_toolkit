import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { postsApi } from './Posts/postsApi'
import { counterSlice } from './slices/counterSlice'
import { pokemonSlice } from './slices/pokemonSlice'
import { todoSlice } from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
    pokemon: pokemonSlice.reducer,
    [postsApi.reducerPath]: postsApi.reducer 
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postsApi.middleware),
})

//required for refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)