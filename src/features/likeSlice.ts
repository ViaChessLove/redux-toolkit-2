import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Mark {
    id: string,
    marked: boolean;
    like: boolean;
    dislike: boolean;
};

interface MarkState{
    value: Mark;
    likeNumber: number;
}

const initialState: MarkState = {
    value: {
        id: '',
        marked: false,
        like: false,
        dislike: false
    },
    likeNumber: 0,
}

const checkLike = (state: any) => {
    if (state.value.like === true){
        state.likeNumber -= 1;
    }
}

export const likeSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setId: (state: any, action: PayloadAction<Mark>)=>{
            state.value = action.payload
            console.log(state.value)
        },

        setLike: (state: any, action: PayloadAction<Mark>) =>{
            if (state.value.id === action.payload.id){
                state.value = {
                    id: state.value.id,
                    marked: true,
                    like: true,
                    dislike: false
                };
                state.likeNumber += 1;
            }

        },
        setDislike: (state: any, action: PayloadAction<Mark>) =>{
            if (state.value.id === action.payload.id){
                checkLike(state);
                state.value = {
                    id: state.value.id,
                    marked: true,
                    like: false,
                    dislike: true
                }; 
            }
        },
        unsetValue: (state: any, action: PayloadAction<Mark>) =>{
            if (state.value.id === action.payload.id){
                checkLike(state);
                state.value = {
                    id: state.value.id,
                    marked: false,
                    like: false,
                    dislike: false
                }
            }
        }
    }
});


export const {setId, setLike, setDislike, unsetValue} = likeSlice.actions;
export default likeSlice.reducer;
