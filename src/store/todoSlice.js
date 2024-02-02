import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos)

const todoSlice = createSlice({
    name: "todos",
    initialState: todoAdapter.getInitialState({
        deletedTodos: []
    }),
    
    reducers: {
        addTodos: todoAdapter.addMany,
        deleteTodo(state, action){
            state.deletedTodos.push(state.entities[action.payload]);
            todoAdapter.removeOne(state,action)
        },
        deleteTodoCompleted: todoAdapter.removeOne,
        updateTodo: todoAdapter.updateOne,
        clearTodos: todoAdapter.removeAll,
        restoreTodo(state, action) {
            todoAdapter.addOne(state, action)
            state.deletedTodos = state.deletedTodos.filter((item) => item.id !== action.payload.id)
        }
    },
});

export const { addTodos, deleteTodo, updateTodo, clearTodos, restoreTodo, deleteTodoCompleted } = todoSlice.actions
export default todoSlice.reducer;
