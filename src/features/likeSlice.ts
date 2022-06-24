import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Mark {
    id: string;
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


const checkLike = (mark: Mark, state: any) => {
    if (mark.like === true){
        state.likeNumber -= 1;
        
    }
}

export const likeSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setLike: (state: any, action: PayloadAction<Mark>) =>{
            if ( state.value.id === action.payload.id ){
                state.value = {
                    id: state.id,
                    marked: true,
                    like: true,
                    dislike: false
                }
                
                state.likeNumber += 1;
            }

        },
        setDislike: (state: any, action: PayloadAction<Mark>) =>{
            state.value.forEach((mark: Mark) => {
                if (mark.id === action.payload.id){
                    checkLike(mark, state);
                    mark = {
                        id: mark.id,
                        marked: true,
                        like: false,
                        dislike: true
                    }; 
                }
            })
            
        },
        unsetValue: (state: any, action: PayloadAction<Mark>) =>{
            state.value.forEach((mark: Mark) => {
                if (mark.id === action.payload.id){
                    checkLike(mark, state);
                    mark= {
                        id: mark.id,
                        marked: false,
                        like: false,
                        dislike: false
                    }
                }
            })
        }
    }
});


export const {setLike, setDislike, unsetValue} = likeSlice.actions;
export default likeSlice.reducer;
