import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Task 1",
    },
    {
      id: 2,
      task: "Task 2",
    },
  ]);

  const AddTodo = (task) => {
    const newTodo = { id: todos.length + 1, task: task.trim() };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <ol>
        {todos.map(({ id, task }) => (
          <li key={id}>{task}</li>
        ))}
      </ol>

      <button onClick={() => AddTodo(`Task ${todos.length + 1}`)}>Add</button>
    </div>
  );
};

export default TodoList;
