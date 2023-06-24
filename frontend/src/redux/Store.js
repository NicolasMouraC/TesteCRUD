import { configureStore } from "@reduxjs/toolkit";
import carsReducer from './slices/carsSlice.js';
import messagesReducer from './slices/messagesSlice.js';
import filterSlice from "./slices/filterSlice.js";

export default configureStore({
    reducer: {
        cars: carsReducer,
        messages: messagesReducer,
        filter: filterSlice,
    }
});