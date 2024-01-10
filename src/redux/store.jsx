import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoSlice'; // Change the import
import cartSlice from './CartSlice';
import counterSlice from './CounterSlice';
import  userSlice  from './UserSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        carts: cartSlice,
        count: counterSlice,
        user: userSlice,
    },
});
