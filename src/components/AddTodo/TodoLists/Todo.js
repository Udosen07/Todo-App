import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  deleteTodoCompleted,
} from "../../../store/todoSlice";

const Todo = ({ text, completed, id }) => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(
      updateTodo({
        id: id,
        changes: { completed: !completed },
      })
    );
  };
  const deleteItem = () => {
    if (completed === true) {
      dispatch(deleteTodoCompleted(id));
    } else {
      dispatch(deleteTodo(id));
    }
  };
  return (
    <div className="space-x-2 flex justify-center my-2">
      <input type="checkbox" value={completed} onChange={toggle} />
      
      {text ? (
        <span className="w-full text-left pb-1">{text}</span>
      ) : (
        <span className="w-full text-left pb-1">No text available</span>
      )} 
      <button
        className="px-2 rounded-md border border-green-800 bg-red-700 text-white font-medium"
        onClick={deleteItem}
      >
        x
      </button>
    </div>
  );
};

export default Todo;
