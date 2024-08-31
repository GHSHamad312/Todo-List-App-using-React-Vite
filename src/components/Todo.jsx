import './todo.css'
import React, { useContext } from 'react'
import { context } from '../contexts/context'

const Todo = ({ value }) => {
  const temp = useContext(context)
  let handledel = () => {

    let temparr = temp.todo.filter((todo) => { return todo.id !== value.todo.id })
    temp.settodo(temparr)
  }
  let handleedit = () => {
    
  }
  let handlecomplete = () => {
   let  updatedarr = temp.todo.map(element=>{
      if(element.id==value.todo.id){
       element.completed=true;
    }
    return element
    })
    temp.settodo(updatedarr)
  }

  return (
    <div className='todoparent'>
      <div className="title">TODO #{value.index + 1}</div>
      <div className="body">{value.todo.body}</div>
      <div className="controls">
        <button className='edit' onClick={handleedit}>Edit </button>
        <button className='delete' onClick={handledel}>Delete</button>
        <button className='complete' onClick={handlecomplete}>Done</button>
      </div>
    </div>
  )
}

export default Todo
