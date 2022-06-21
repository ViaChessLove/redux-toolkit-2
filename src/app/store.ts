import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/postSlice';
import likeReducer from '../features/likeSlice'

export const store = configureStore({
    reducer: {
        posts: postReducer,
        like: likeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
