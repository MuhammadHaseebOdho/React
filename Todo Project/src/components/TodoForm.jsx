import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");

  const { addTodo } = useTodo();
  const add = (evt) => {
    evt.preventDefault();
    if(!todoMsg) return 
    addTodo({todoMsg,completed: false});
    setTodoMsg("")
  };
  const onChange = (evt) => {
    setTodoMsg(evt.target.value);
  };

  return (
    <form onSubmit={add} className="flex">
      <input
      value={todoMsg}
        onChange={onChange}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
