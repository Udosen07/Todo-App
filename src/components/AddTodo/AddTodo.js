import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodos } from "../../store/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const submit = () => {
    if (text.length > 0) {
      const items = text.split(",");
      dispatch(
        addTodos(
          items.map((item) => ({ id: nanoid(), text: item, completed: false }))
        )
      );
      setText("")
    }
  };

  return (
    <div className="damonContainer">
      <div className="text-center w-full flex flex-col items-center mt-6 space-y-3">
        <p>To add multiple items write them comma seperated</p>
        <div className="w-full">
          <input
            className=" w-full border border-black md:w-1/2 p-2"
            placeholder="eg: Eggs, Bread, Ham, Chesse"
            value={text}
            onChange={(e) => setText(e.target.value)}
            
          />
        </div>
        <button className="bg-sky-500 p-1 md:p-4 mx-auto rounded-md font-medium text-white" onClick={submit}>
          Add Task 
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
