import axios from "axios";

const Task = ({ item: { task, date, id, taskDone }, getTasks }) => {
  const delTask = async (objID) => {
    const BASE_URL =
      "https://63f88fe25b0e4a127de89fae.mockapi.io/task-tracker-team";
    await axios.delete(`${BASE_URL}/${objID}`);
    getTasks();
  };

  const editTask = async (doneVal) => {
    const BASE_URL =
      "https://63f88fe25b0e4a127de89fae.mockapi.io/task-tracker-team";
    await axios.put(`${BASE_URL}/${id}`, {
      task,
      date,
      taskDone: doneVal,
      id,
    });
    getTasks();
  };

  const handleDone = () => {
    editTask(!taskDone);
  };

  const handleRemove = () => {
    delTask(id);
  };

  return (
    <div
      className={`task d-flex justify-content-between align-items-center p-3 ${
        taskDone && "done"
      }`}
      onDoubleClick={handleDone}
    >
      <div className="d-flex flex-column align-items-start">
        <h4>{task}</h4>
        <small>{new Date(date).toLocaleString("en-US")}</small>
      </div>
      <div onClick={handleRemove}>
        <i className="fa-solid fa-xmark fa-2x text-danger"></i>
      </div>
    </div>
  );
};

const Tasks = ({ tasks, getTasks }) => {
  return (
    <div className="mt-4 text-center d-flex flex-column gap-3">
      {tasks.length ? (
        tasks.map((item, index) => {
          return <Task key={index} item={item} getTasks={getTasks} />;
        })
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
};

export default Tasks;
