import {useReducer, useState} from 'react'

const initialState = {
  count: 1,
}

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state.count < action.payload.max
        ? {count : state.count + action.payload.randStep}
        : {count : 1}
    case "DECREMENT":
      return state.count < action.payload.max
        ? {count : state.count - action.payload.randStep}
        : {count : 1}
    case "RESET":
      return initialState
    case "RANDOM":
      return {count: Math.floor(Math.random() * (action.payload.max - action.payload.min) + action.payload.min)}
    default :
      throw new Error("Unsupported action type: "+ action.type)
  }
}

function App({randStep, min, max}) {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const {count} = state;

  return (
    <div className="App">
      <p>
        단계: {randStep}, 최소: {min}, 최대: {max}
      </p>
      <h2>{count}</h2>
      <button onClick={() => dispatch({type: "INCREMENT", payload: {randStep, min, max}})}>증가</button>
      <button onClick={() => dispatch({type: "DECREMENT", payload: {randStep, min, max}})}>감소</button>
      <button onClick={() => dispatch({type: "RESET",})}>초기화</button>
      <button onClick={() => dispatch({type: "RANDOM", payload: {min, max}})}>랜덤</button>
      <button onClick={() => dispatch({type: "ERROR BUTTON"})}>에러</button>
    </div>
  );
}

export default App;
