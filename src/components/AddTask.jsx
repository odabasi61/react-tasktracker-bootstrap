import axios from "axios";
import { useState } from "react";

const AddTask = ({ tasks, getTasks }) => {
  const [newTask, setNewTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  console.log(tasks, getTasks);

  const addTask = async (obj) => {
    const BASE_URL =
      "https://63f88fe25b0e4a127de89fae.mockapi.io/task-tracker-team";
    await axios.post(BASE_URL, obj);
    getTasks();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task: newTask, date: taskDate, taskDone: false });
    setNewTask("");
    setTaskDate("");
  };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Add a task
        </label>
        <input
          type="text"
          className="form-control"
          id="task"
          aria-describedby="emailHelp"
          placeholder="Task"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="task-date" className="form-label">
          Password
        </label>
        <input
          type="datetime-local"
          className="form-control"
          id="task-date"
          value={taskDate}
          onChange={(e) => {
            setTaskDate(e.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddTask;
