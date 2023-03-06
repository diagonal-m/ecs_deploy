import React from "react";
import './App.css';
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = React.useState([])

  const handleClick = () => {
    axios
      .get("http://localhost:5000/api/v1/tasks")
      .then(res => setTasks(JSON.parse(res.data.tasks)))
      .catch(err => alert(err));
  }

  return (
    <div class="container">
      <div>
        <h1 class="title">
          ecs-deploy
        </h1>
        <h2 class="subtitle">
          Let's ecs deploy
        </h2>
        <button onClick={handleClick}>
          タスク取得
        </button>
        <ul>
          {tasks.map((task, index)=> (
            <li key={index} style={{ textAlign: "left" }}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
