import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    counter: 0
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.counter += 1
        },
        descrementCounter: (state) => {
            state.counter -= 1
        }
    }
})

export const { incrementCounter, descrementCounter } = counterSlice.actions;

export default counterSlice.reducer;