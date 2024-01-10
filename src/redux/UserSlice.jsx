import { createSlice } from '@reduxjs/toolkit';
import userData from '../assets/MOCK_DATA.json'

const initialState = {
    users: userData.users,
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(item=> item.id !== action.payload)
        },
        updateUser: (state, action) => {
            const { id, updatedUserData } = action.payload;
            const index = state.users.findIndex((user) => user.id === id);
      
            if (index !== -1) {
              state.users[index] = { ...state.users[index], ...updatedUserData };
            }
          },
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions;

export default userSlice.reducer;