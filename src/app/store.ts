import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/postSlice';
import likeReducer from '../features/likeSlice';
import editReducer from '../features/editSlice';

export const store = configureStore({
    reducer: {
        posts: postReducer,
        like: likeReducer,
        edit: editReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
