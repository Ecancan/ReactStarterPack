import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from '../api/services/apiService';
import { loadingSlice } from './slices/loadingSlice';
import { mainSlice } from './slices/mainSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    main: mainSlice.reducer,
    loading: loadingSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
