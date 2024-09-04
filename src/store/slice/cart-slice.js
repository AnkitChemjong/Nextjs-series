import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.cartItems.push(action.payload);

        },
        removeFromCart(state,action){
          let cpyCartItems=[...state.cartItems];
          cpyCartItems=cpyCartItems.filter(item=>item.id !== action.payload);
          state.cartItems=cpyCartItems;
        }
    }
});

export const {addToCart, removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;