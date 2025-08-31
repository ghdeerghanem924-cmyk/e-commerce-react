import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";
import  registerSlice  from "./slices/registerSlice";

const store = configureStore({
    reducer : {
        product: productReducer,
        cart: cartReducer,
        register : registerSlice
    }
});

export default store;