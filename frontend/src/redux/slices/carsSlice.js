import { createSlice } from '@reduxjs/toolkit';

export const carsSlice = createSlice({
    name: "cars",
    initialState: {
        cars: [],
        isCarsLoaded: false
    },
    reducers: {
        toggleIsCarsLoaded: (state, action) => {
            state.isCarsLoaded = (false);
        },
        setCars: (state, action) => {
            state.cars = action.payload.cars
            state.isCarsLoaded = true;
        }
    }
})

export const selectCars = (state) => state.cars.cars;
export const selectIsCarsLoaded = (state) => state.cars.isCarsLoaded;
export const { toggleIsCarsLoaded, setCars } = carsSlice.actions;
export default carsSlice.reducer;