
import { createSlice } from '@reduxjs/toolkit';

const todo = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push({
                id: Date.now(),
                name: action.payload.name,
                email: action.payload.email,
                age: action.payload.age,
                completed: false,
            });
        },
        toggleUser: (state, action) => {
            const user = state.find((user) => user.id === action.payload);
            if (user) {
                user.completed = !user.completed;
            }
        },
        removeUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload);
        },
    },
});

export const { addUser, toggleUser, removeUser } = todo.actions;
export default todo.reducer;
