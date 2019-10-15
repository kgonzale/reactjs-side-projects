import React, { useState } from "react";
import Header from "./Header.js";
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState(["eat", "sleep", "code"])

  const onDeleteTodo = (deleteIndex) => {
    const deleteTodo = todo.slice();
    deleteTodo.splice(deleteIndex, 1);
    setTodo(deleteTodo);
  }

  const onAddTodo = (text) => {
    if (text === "") { return; }

    const newTodo = todo.slice();
    newTodo.push(text);
    setTodo(newTodo);
  }

  return (
    <div>
      <Header onAddTodo={onAddTodo} />
      <TodoList onDeleteTodo={onDeleteTodo} todos={todo} />
    </div>
  );
}

export default App;