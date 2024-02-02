import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todoSelectors,
  clearTodos,
  restoreTodo,
} from "../../../store/todoSlice";
import Todo from "./Todo";

const TodoLists = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(todoSelectors.selectEntities);
  const deletedTodos = useSelector((state) => state.todos.deletedTodos);
  const todoCount = useSelector(todoSelectors.selectTotal);

  const todoList = [];

  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];
      todoList.push(
        <Todo
          key={todoItem.id}
          id={todoItem.id}
          completed={todoItem.completed}
          text={todoItem.text}
        />
      );
    }
  }

  const restore = (todo) => {
    if (todo && todo.id) {
      dispatch(restoreTodo(todo));
    } else {
      console.error("Invalid todo object:", todo);
    }
  };

  

  const deleteList = deletedTodos.map((item) => {
    if (item && item.text !== undefined) {
      return (
        <div key={item.id} className="space-x-2 flex justify-center my-2">
          <span className="w-full text-left pb-1">{item.text}</span>
          <button
            onClick={() => restore(item)}
            className="px-2 rounded-md border text-white border-green-800 bg-blue-700 font-medium"
          >
            Restore
          </button>
        </div>
      );
    } else {
      return null; 
    }
  });

  return (
    <div className="damonContainer h-full">
      <div className=" mt-6 space-y-4 md:mt-12 ">
        <h3 className="font-medium">Tasklist</h3>
        <div className="list-gradient p-3">
        <div className="flex justify-between items-center">
          <div>
            <h4>Daily Task: {todoCount}</h4>
          </div>
          <div>
            <button
              className="p-1 rounded-md bg-red-700 font-medium text-white md:p-2"
              onClick={() => {
                dispatch(clearTodos());
              }}
            >
              Clear all Task
            </button>
          </div>
        </div>

        <div>{todoList}</div>
        <h3>Deleted Task:</h3>
        {deleteList}
        </div>
      </div>
    </div>
  );
};

export default TodoLists;
