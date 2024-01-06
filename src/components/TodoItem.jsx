import useTodo from "../hooks/useTodo";

function TodoItem(props) {
  const { job, setEditId } = props;
  const { hdlDel } = useTodo();

  const onDelete = () => {
    if (confirm("Delete this item?")) {
      hdlDel(job.id);
    }
  };
  return (
    <div className="todo-item">
      <div className={job.completed ? "job-done" : ""}>{job.todo}</div>
      <div className="btn-group">
        <div
          className={`text-green-700 text-sm ${
            job.completed ? " text-center" : ""
          }`}
        >
          {job.date}
          {job.completed ? " SUCCESS *" : ""}
        </div>

        <button
          className="h-8 bg-yellow-400 hover:bg-yellow-500 text-black  py-1 px-4 rounded"
          onClick={() => {
            setEditId(job.id);
          }}
        >
          Edit
        </button>
        <button
          className="h-8 bg-red-400 hover:bg-red-500 text-black  py-1 px-4 rounded"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
