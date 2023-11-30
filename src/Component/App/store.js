import { configureStore } from "@reduxjs/toolkit";
import addtocartReducer from "./addtocartSlice";

 const store = configureStore({
    reducer: addtocartReducer,
    });

export default store;