import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Mark {
    marked: boolean;
    like: boolean;
    dislike: boolean;
};

interface MarkState{
    value: Mark;
}

const initialState: MarkState = {
    value: {
        marked: false,
        like: false,
        dislike: false
    }
}



export const likeSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        
        setLike: (state: any, action: PayloadAction<Mark>) =>{
                state.value = {
                    marked: true,
                    like: true,
                    dislike: false
                }
        },
        setDislike: (state: any, action: PayloadAction<Mark>) =>{
            state.value = {
                marked: true,
                like: false,
                dislike: true
            }
        },
        unsetValue: (state: any, action: PayloadAction<Mark>) =>{
            state.value = {
                marked: false,
                like: false,
                dislike: false
            }
        }
    }
});


export const {setLike, setDislike, unsetValue} = likeSlice.actions;
export default likeSlice.reducer;
