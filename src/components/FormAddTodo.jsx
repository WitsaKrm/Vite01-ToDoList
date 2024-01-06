import { useState } from "react";
import useTodo from "../hooks/useTodo";

function FormAddTodo() {
  const { hdlAdd } = useTodo();
  const [input, setInput] = useState("");

  const hdlSubmit = (e) => {
    e.preventDefault();
    let newJob = { todo: input, completed: false, user: 1, date:new Date().toDateString() };
    hdlAdd(newJob);
  };

  return (
    <form className="form-add-todo" onSubmit={hdlSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        className=" mx-4 w-20 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default FormAddTodo;
