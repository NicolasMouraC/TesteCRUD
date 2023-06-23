import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./slices/carsSlice.js";

export default configureStore({
    reducer: {
        cars: carsSlice,
    }
});