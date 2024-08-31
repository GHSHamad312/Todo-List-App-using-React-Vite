import './mainlist.css'
import Todo from './Todo'
import React, { useContext, useRef } from 'react'
import { context } from '../contexts/context'

const Mainlist = () => {
  const value = useContext(context)
  const addref = useRef();
  
  let handleadd = () => {
    if (addref.current.value !== '') {
      value.setnumber(value.number + 1)
      value.settodo([...value.todo, { id: value.number, body: addref.current.value, completed: false }])
    }
    addref.current.value = ''
  }
  return (
    <div className="parent">
      <div className="form">
        <input type="text" ref={addref} name="todo" id="todo" />
        <button className='add' onClick={handleadd}>Add Todo</button>
      </div>
      <div className="lowerdisplay">
        {value.todo.map((todo, index) => {
          if (!todo.completed) {
            return <Todo key={index} value={{ todo, addref, index }} />
          }
          return null;
        })}

      </div>
    </div>
  )
}

export default Mainlist
