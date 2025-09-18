import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../features/api/baseApi';
import counterReducer from '../features/counter/counterSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware)
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
