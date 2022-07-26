// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, {type, step}) => {
  // Old State and new State (Type & Step)
  if (type === 'INCREMENT') {
    return {count: state.count + step};
  }
  return state;
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  });
  const {count} = state;
  
  const increment = () => dispatch({type: 'INCREMENT', step});

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
