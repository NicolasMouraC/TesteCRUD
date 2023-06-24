import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: "Modelo",
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload.filter;
        }
    }
})

export const selectFilter = (state) => state.filter.filter;
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;