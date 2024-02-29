import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./ProductSlice"

const store=configureStore({

    reducer:{
        mycart:CardReducer
    }
})

export default store;