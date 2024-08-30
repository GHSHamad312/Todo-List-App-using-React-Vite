import './todo.css'
import React, { useContext } from 'react'
import { context } from '../contexts/context'

const Todo = ( {value}) => {
  const temp=useContext(context)
  let handledel = ()=>{
    
    let temparr=temp.todo.filter((todo) => {return todo.id!==value.todo.id})
    temp.settodo(temparr)
  }
  let handleedit= ()=>{
    value.addref.current.value = value.todo.body
    temp.todo[value.index].body=value.addref.current.value
  }
  let handlecomplete=()=>{
    console.log(temp.todo[value.index])
  temp.todo[value.index].completed=true
  console.log(temp.todo[value.index])
  }

  return (
    <div className='todoparent'>
      <div className="title">TODO #{value.index+1}</div>
      <div className="body">{value.todo.body}</div>
      <div className="controls">
      <button className='edit' onClick={handleedit}>Edit </button>
      <button className='delete'onClick={handledel}>Delete</button>
      <button className='complete'onClick={handlecomplete}>Done</button>
      </div>
    </div>
  )
}

export default Todo
