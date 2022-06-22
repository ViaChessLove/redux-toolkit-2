import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Post {
    id: string;
    name: string;
    post: string;
    
}   

interface PostState{
    value: Post[];
    postNumber: number;
}
const initialState: PostState = {
    value: [],
    postNumber: 0
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addPost: (state: any, action: PayloadAction<Post>) => {
            state.value.push(action.payload);
            state.postNumber += 1;

        },
        removePost: (state: any, action: PayloadAction<Post>) => {
            state.value.forEach((post: Post) => {
                if (post.id === action.payload.id) {
                    state.value.splice(post, 1);
                    state.postNumber -= 1;
                }
            })
        }
    }
})

export const {addPost, removePost} = postSlice.actions;
export default postSlice.reducer;

