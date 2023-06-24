import { configureStore } from "@reduxjs/toolkit";
import carsReducer from './slices/carsSlice.js';
import errorsReducer from './slices/errorsSlice.js';

export default configureStore({
    reducer: {
        cars: carsReducer,
        errors:errorsReducer,
    }
});