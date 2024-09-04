import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/store/slice/cart-slice";


const store=configureStore(
    {
        reducer:{
           cart:cartSlice
    }
}
);

export default store;