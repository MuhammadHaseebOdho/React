import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  // Initialize the state for todo messages
  const [todoMessages, setTodoMessages] = useState(
    todos.map((todo) => ({ id: todo.id, text: todo.text }))
  );

  // Handler to update the todo message
  const handleChange = (id, newText) => {
    setTodoMessages((prevMessages) =>
      prevMessages.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <>
      <div>Todos</div>
      {todoMessages.map((todo) => (
        <div key={todo.id}>
          <input
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            value={todo.text}
            type="text"
            readOnly={!isTodoEditable}
            onChange={(e) => handleChange(todo.id, e.target.value)}
          />
          
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
              if (todo.completed) return;

              if (isTodoEditable) {
                edit();
              } else setIsTodoEditable((prev) => !prev);
            }}
            
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      ))}
    </>
  );
}

export default Todos;
