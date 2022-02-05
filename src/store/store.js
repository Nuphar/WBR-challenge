import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from "./layoutSlice";
import componentsReducer from "./componentsSlice";

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        components: componentsReducer
    },
});