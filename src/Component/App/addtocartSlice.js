import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
    totalItems: 0,
    };
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex=state.cart.findIndex((item)=>item._id===action.payload._id);
            if(itemIndex>=0){
                state.cart[itemIndex].cartQuantity+=1;
            }else{
                const temp={...action.payload,cartQuantity:1};
            state.cart.push(temp);
            }
        state.totalItems += 1;
        state.total += action.payload.price;
        },
    }});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;