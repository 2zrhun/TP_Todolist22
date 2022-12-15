import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../component/styles/App.css";

const Todolist = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

  const addTask = () => {
    if (!input || tasks.includes(input)) {
      alert("invalid input");
      return;
    }

    //add input to localstorage
    const newTasks = [...tasks, input];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
    setInput("");
  };

  const deleteTask = (task) => {
    const newTasks = tasks.filter((t) => t !== task);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <input
        placeholder="add a task"
        className="input-group mb-3"
        onChange={(e) => setInput(e.target.value)}
        required
      />

      <Button variant="dark" className="btn" onClick={addTask}>
        Add
      </Button>

      <div className="list">
        {tasks.map((task) => {
          return (
            <div className="list-item">
              <ListGroup>
                <ListGroup.Item className="list-group-item">
                  {task}
                  <Button
                    variant="Danger"
                    className="btn btn-danger"
                    onClick={() => deleteTask(task)}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
