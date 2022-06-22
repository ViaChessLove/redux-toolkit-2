import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditState {
    value: boolean;
}

const initialState: EditState = {
    value: false,
}

const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        changeState: (state: any, action: PayloadAction<boolean>) =>{
            state.value = action.payload;
        }
    }
});


export const {changeState} = editSlice.actions; 
export default editSlice.reducer;

