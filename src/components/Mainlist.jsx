import './mainlist.css'
import Todo from './Todo'
import React from 'react'

const Mainlist = () => {
  return (
    <div className="parent">
        <div className="form">
            <input type="text" name="todo" id="todo" />
            <button className='add'>Add Todo</button>
        </div>
    <div className="lowerdisplay">
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    </div>
    </div>
  )
}

export default Mainlist