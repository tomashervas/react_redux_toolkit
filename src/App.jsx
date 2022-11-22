import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/slices/counterSlice'

import './App.css'
import { añadir } from './store/slices/todoSlice'

function App() {

  const [text, setText] = useState('')
  const count = useSelector((state)=>state.counter.value)
  const todos = useSelector(state=> state.todo.todos)

  const dispatch = useDispatch()

  const handleInput = (ev)=>{
    setText(ev.target.value)
  }

  return (
    <>
      <h1>Hola Tomás</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        {todos.map((t, i)=> (
        <p key={i} >{t}</p>
        )) }
        <button onClick={()=>{
          dispatch(añadir(text))
          setText('')
        }} > añadir todo</button>
        <input placeholder='Introduce una tarea...' type="text" value={text} onChange={handleInput}/> 
      </div>
    </>
  )
}

export default App
