import { useState } from "react"
import Switch from "./components/Switch"

function App() {
  const todos = ['Todo 1', 'Todo 2', 'Todo 3']
  const [todo, setTodo] = useState(todos)
  const [text, setText] = useState('')

  function handleChange(e){
    setText(e.target.value)
  }

  function handleClick(){
    if (text !== '') {
      setTodo([...todo, text])
      setText('')
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-svh ">
        <div className="card w-96 bg-base-100 shadow-xl text-center">
          <h1 className="text-2xl">Todo List</h1>
          <div className="flex gap-3 mt-5">
            <input onChange={handleChange} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button onClick={handleClick} className="btn btn-primary">Add Todo</button>
          </div>
          <div>
              <ul className="text-left list-disc">
                {todo.map((item, index)=> (
                  <li key={index} >{item}</li>
                ))}
              </ul>
          </div>
        </div>
        <div>
        <Switch />
    </div>
      </div>
    </>
  )
}

export default App
