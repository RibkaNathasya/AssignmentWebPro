import { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1};
    case ACTIONS.DECREMENT:
      return {count: state.count - 1};
    default:
      return state;
  }
}

function ExampleStateHook() {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return(
    <div>
      <p>You clicked {state.count} times.</p>
      
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        Click to +1
      </button>
      
      &nbsp;

      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        Click to -1
      </button>
    </div>
  );
}

export default ExampleStateHook;
