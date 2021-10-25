import "./App.css";
import { useRef, useState, useEffect } from "react";
import Tasks from "./Components/Tasks";
function App() {
  const inputText = useRef("");
  const apiUrl = "http://localhost:8080";
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch(`${apiUrl}/tasks`);
      const data = await res.json();
      setTasks(data.tasks);
    }

    fetchTasks();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    addNewTask();
  }

  function addNewTask() {
    const text = inputText.current.value;
    fetch(`${apiUrl}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }).then(async (response) => {
      const data = await response.json();

      const newData = [...tasks, data.task];
      setTasks(newData);
      inputText.current.value = "";
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Task Management App</p>
      </header>
      <form onSubmit={onSubmit}>
        <input ref={inputText} type="text" placeholder="what you have to do" />
        &nbsp; <button>Save Task</button>
      </form>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
