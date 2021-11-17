import React, {useState, useReducer} from 'react';
import TodoItem from './TodoItem';
import '../../styles/App.css';

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  // console.log(todos);

  return(
    <div className="container p-10">
    <div className="p-3 mb-2 bg-info text-dark">
    <div className="text-center">
      <h1>To Do List APP</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="What would you do..." className="form-control" type="text" value={text} onChange={(event) => setText(event.target.value)} /> 
        <button className="btn btn-dark my-3 text-center" type="Submit">Add Todo</button>
      </form>

      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
    </div>
    </div>
    </div>
  );
}

export default Todos;
