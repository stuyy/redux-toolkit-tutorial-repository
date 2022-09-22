import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import postsReducer from './posts/postsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
