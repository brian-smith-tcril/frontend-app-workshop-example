import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coursesApi } from '../example'

// import { counterReducer } from '../example'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
})

setupListeners(store.dispatch)