import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../example'

// import { counterReducer } from '../example'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)