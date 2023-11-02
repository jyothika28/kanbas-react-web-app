import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoItem({ todo,
 }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      {todo.title}
      <div className="float-end">
      <button className="btn btn-danger"onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      <button className="btn btn-primary" onClick={() => dispatch(setTodo(todo))}> Edit </button>
      </div>
      
    </li>
  );
}
export default TodoItem;