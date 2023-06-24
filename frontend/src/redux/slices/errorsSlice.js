import { createSlice } from '@reduxjs/toolkit';

export const errorsSlice = createSlice({
    name: "errors",
    initialState: {
        errors: [],
        errorNum: 0
    },
    reducers: {
        addError:(state, action) => {
            state.errors.push({...action.payload, id: state.errorNum});
            state.errorNum++;
        },
        deleteError: (state, action) => {
            state.errors = state.errors.filter(error => error.id !== action.payload.errorId);
            console.log(state.errors.length)
        }
    }
})

export const selectErrors = (state) => state.errors.errors;
export const { addError, deleteError } = errorsSlice.actions;
export default errorsSlice.reducer;