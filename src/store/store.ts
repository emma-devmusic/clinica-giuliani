import { Middleware, configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { authMiddleware } from './middleware/auth-middleware';
import { usersMiddleware } from './middleware/users-middleware';
import { assetsMiddleware } from './middleware/assets-middleware';
import authReducer from './slices/authSlice'
import uiReducer from './slices/uiSlice';
import usersReducer from './slices/usersSlice';
import assetsReducer from './slices/assetsSlice';

const middlewares = [
    authMiddleware,
    usersMiddleware,
    assetsMiddleware
] as Middleware[]

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    users: usersReducer,
    assets: assetsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(middlewares)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;