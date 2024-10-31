import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoProvider } from "./Contexts";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((prevVal) => prevVal.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((curVal) =>
        curVal.id === id ? { ...curVal, complete: !curVal.complete } : curVal
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <h1 className="text-4xl font-bold">Manage Your Todo</h1>

      <TodoForm />

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoProvider>
  );
}

export default App;
