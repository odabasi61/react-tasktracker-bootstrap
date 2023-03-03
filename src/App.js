import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);

  const getTasks = async () => {
    const BASE_URL =
      "https://63f88fe25b0e4a127de89fae.mockapi.io/task-tracker-team";
    await axios(BASE_URL)
      .then((res) => {
        console.log(res);
        if (Math.trunc(res.status) / 100 !== 2) {
          setError(true);
          throw new Error("Something went wrong.");
        } else {
          setTasks(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return error ? (
    <div className="error-wrapper d-flex flex-column justify-content-center align-items-center gap-3 h-100 w-100">
      <h1 className="display-3 text-danger">Oops, something went wrong</h1>
      <p className="font-italic">Check console to display error message</p>
    </div>
  ) : (
    <div className="tasks-wrapper">
      <Header tasks={tasks} getTasks={getTasks} />
      <Tasks tasks={tasks} getTasks={getTasks} />
    </div>
  );
}

export default App;
