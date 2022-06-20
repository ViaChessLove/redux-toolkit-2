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
        }
    }
})

export const {addPost} = postSlice.actions;
export default postSlice.reducer;

