import { useState } from "react";
import useTodo from "../hooks/useTodo";

function TodoEditForm(props) {
  const { job, onDone } = props;
  const { hdlEdit } = useTodo();
  const [input, setInput] = useState(job.todo);
  const [check, setCheck] = useState(job.completed);

  const hdlSubmit = (e) => {
    e.preventDefault();
    let updatedJob = { todo: input, completed: check ,date:job.date};
    hdlEdit(job.id, updatedJob);
    onDone();
  };
  return (
    <form className="todo-edit-form" onSubmit={hdlSubmit}>
      <input
        className="py-2 px-4 mx-2 w-80 rounded"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        className="align-middle w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring focus:border-orange-500"
        type="checkbox"
        value={check}
        checked={check}
        onChange={() => setCheck((prev) => !prev)}
      />
      <span className="px-2 align-middle">{check? "Task Complete !" : "Task In Progress..."}</span> <br/>
      <div className="btn-group my-4">
      <button
        className="bg-green-600 hover:bg-green-700 mx-4 text-black  py-1 px-4 rounded"
        type="submit"
      >
        Save
      </button>
      <button
        className="bg-red-400 hover:bg-red-500 text-black  py-1 px-4 rounded"
        onClick={onDone}
        type="reset"
      >
        Cancel
      </button>
      </div>
    </form>
  );
}

export default TodoEditForm;
