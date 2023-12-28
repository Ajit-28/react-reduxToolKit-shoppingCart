import { createSlice } from '@reduxjs/toolkit';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const initialState = {
    todos: [{
        id: getRandomInt(1, 100), text: "Hello World!"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const randomInteger = getRandomInt(1, 100); // Move the random generation here
            const todo = {
                id: randomInteger,
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
