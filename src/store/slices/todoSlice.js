import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: ['Hacer la compra']
    },
    reducers: {
        añadir: (state, action ) => {
            state.todos.push(action.payload)
        },
    }
});


// Action creators are generated for each case reducer function
export const { añadir } = todoSlice.actions;