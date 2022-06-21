import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Post {
    id: string;
    name: string;
    post: string;
    
}   

interface PostState{
    value: Post[];
}
const initialState: PostState = {
    value: []
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addPost: (state: any, action: PayloadAction<Post>) => {
            state.value.push(action.payload);
        },
        removePost: (state: any, action: PayloadAction<Post>) => {
            state.value.forEach((post: Post) => {
                if (post.id === action.payload.id) {
                    state.value.splice(post, 1);
                }
            })
        }
    }
})

export const {addPost, removePost} = postSlice.actions;
export default postSlice.reducer;

