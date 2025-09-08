import { use, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    let [todos, setTodos] = useState([{task: "sample task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState([]);

    let addNewTask = () =>{
        setTodos([...todos, {task: newTodo, id:uuidv4()}]);
        setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

  return (
    <div>
        <input placeholder='add a task' value = {newTodo} onChange={updateTodoValue}></input>
        <br></br><br></br>
        <button onClick={addNewTask}>add task</button>
        <br></br> <br></br> <br></br>
        <h2>Task Manager</h2>
        <ul>
            {
                todos.map((todo) =>(
                    <li key={todo.id}>
                     <span>{todo.task}</span>
                &nbsp; &nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default Todo;
