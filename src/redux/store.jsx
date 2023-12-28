import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoSlice'; // Change the import
import cartSlice from './CartSlice';
import counterSlice from './CounterSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Change the reducer assignment
        carts: cartSlice,
        count: counterSlice,
    },
});
