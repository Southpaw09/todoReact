import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const changeHandler = (e) => setTask(e.target.value);
  const clickHandler = (task) => {
    const newTask = {
      id: Math.random() * 100,
      heading: task,
      completed: false,
    };
    setTaskList((prev) => [...prev, newTask]);
    setTask("");
  };
  const deleteTask = (id) => {
    const newList = taskList.filter((item) => item.id !== id);
    setTaskList(newList);
  };
  const editTask = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          console.log("completed");
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <React.Fragment>
      <div className="input">
        <input onChange={changeHandler} value={task} />
        <button onClick={() => clickHandler(task)}>Submit</button>
      </div>
      <div className="list">
        {taskList.map((task) => {
          return (
            <div
              style={{
                backgroundColor: task.completed ? "green" : "orange",
              }}
              className="task"
              key={task.id}
            >
              <p>{task.heading}</p>
              <div className="buttons">
                <button className="delete" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
                <button className="completed" onClick={() => editTask(task.id)}>
                  Completed
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
