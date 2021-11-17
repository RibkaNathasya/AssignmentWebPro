import React from 'react';

function TodoItem({todo, dispatch}) {
  return(
    <div>
      <input type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} />
      
      <span className="btn-light" style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span>
      
      <button className="btn-primary" onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}>x</button>
    </div>
  );
}

export default TodoItem;
