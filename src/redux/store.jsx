import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoSlice'; // Change the import
import  cartSlice  from './CartSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Change the reducer assignment
        carts: cartSlice
    },
});
