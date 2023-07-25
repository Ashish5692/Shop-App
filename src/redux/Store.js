import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
    //input has object which is reducer ,inside reducer we make another object
    reducer:{
        //listing all slices ,here key is slice name i.e cart and value is slice function name
        cart: CartSlice.reducer,
    }
});