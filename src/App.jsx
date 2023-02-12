import { useState } from "react";

import Container from "react-bootstrap/Container";

import { TaskForm, TaskCard } from "./components";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const deleteTodoHandler = (id) => {
    setTimeout(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }, 1000);
  };

  return (
    <Container>
      <div className="app">
        <h1>Todo list 😎</h1>
        <TaskForm todos={todos} setTodos={setTodos} />
        <div className="tasksContainer">
          {todos.map(({ title, desc, id }, index) => (
            <TaskCard
              title={title}
              desc={desc}
              id={id}
              key={id}
              count={todos.length - index}
              deleteTodoHandler={deleteTodoHandler}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
