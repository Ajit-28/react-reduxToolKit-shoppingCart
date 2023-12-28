import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item._id === action.payload._id)
            if(existingItem){
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }else{
                state.cart.push({...action.payload, quantity: 1, totalPrice: action.payload.price});
            }
        },
        quantity: (state, action) => {
            const existingItem = state.cart.find(item => item._id === action.payload);
            if (existingItem) {
                // If the item exists in the cart, decrease its quantity
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                    existingItem.totalPrice = existingItem.price * existingItem.quantity;
                } else {
                    
                }
            }
        },

        removeCart: (state, action) => {
            state.cart = state.cart.filter((item) => item._id !== action.payload);
        }
    }
})

export const { addToCart, removeCart, quantity } = cartSlice.actions;

export default cartSlice.reducer;