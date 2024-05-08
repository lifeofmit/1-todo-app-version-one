import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "task 1",
      dueDate: "04/10/2040",
    },
    {
      name: "task 2",
      dueDate: "05/10/2040",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
