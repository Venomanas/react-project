import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/Todoitems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos(prev => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(prev => prev.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const toggleComplete = id => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
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
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <TodoForm />
      {todos.map(todo => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </TodoProvider>
  );
}

export default App;
