import { createSlice } from "@reduxjs/toolkit";
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes' });

const cartItems = ls.get('cart');
const totalItems = ls.get('totalItems');
const total = ls.get('total');


const initialState = {
    cart:  [],
    totalItems:  0,
    total:  0,
    };

    const storeCartItems=(cart,totalItems,total)=>{
    
        ls.set('cart', cart);
        ls.set('totalItems', totalItems);
        ls.set('total', total);
    }    
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const { _id,name, type, price,size,quantity,pic } = action.payload;
            const product = state.cart.find((item) => item._id === _id);
            const total= price*quantity;
            
            if (product) {
                // convert to int
                product.quantity=parseInt(product.quantity)+parseInt(quantity);
                product.total=parseInt(product.total)+parseInt(total); 
            } else {
                state.cart.push({
                    _id,
                    name,
                    size,
                    type,
                    price,
                    quantity,
                    total,
                    pic
                });
            }

            state.totalItems=parseInt(state.totalItems)+parseInt(quantity);
            // convert to total float with 2 digits
            state.total += (total)
            storeCartItems(state.cart,state.totalItems,state.total)
            
        },
       

         removeFromCart: (state, action) => {
            const  _id  = action.payload;
            console.log("first",_id)
            const product = state.cart.find((item) => item._id === _id);
            const total= product.total;
            // if product then remove from cart
            console.log("first",state.cart)

            if (product) {
                state.cart = state.cart.filter((item) => item._id !== _id);
                state.totalItems=parseInt(state.totalItems)-parseInt(product.quantity);
                state.total -= (total);
            }
            storeCartItems(state.cart,state.totalItems,state.total)
            
        },
        updateQuantity:(state,action)=>{
            const {_id,quantity}=action.payload;
            const product = state.cart.find((item)=>item._id===_id);
            if(quantity===1){
                const total=product.price*product.quantity+quantity*product.price;
            if(product){
                product.quantity=parseInt(product.quantity)+1;
                product.total=total;
                state.totalItems=parseInt(state.totalItems)+1;
                state.total += product.price;
            }}
            if(quantity===-1){
                if(product.quantity>1){
                const total=product.price*product.quantity-product.price;
                if(product){
                    product.quantity=parseInt(product.quantity)-1;
                    product.total=total;
                    state.totalItems=parseInt(state.totalItems)-1;
                    state.total-=product.price;
                }}}
                storeCartItems(state.cart,state.totalItems,state.total);
            }

    
    
    }});

export const { addToCart , removeFromCart ,updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;