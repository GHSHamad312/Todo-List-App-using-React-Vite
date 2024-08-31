import './mainlist.css';
import Todo from './Todo';
import React, { useContext, useRef } from 'react';
import { context } from '../contexts/context';

const Mainlist = () => {
  const { todo, settodo, number, setnumber, done } = useContext(context);
  const addref = useRef();

  const handleadd = () => {
    if (addref.current.value !== '') {
      setnumber(number + 1);
      settodo([...todo, { id: number, body: addref.current.value, completed: false }]);
      addref.current.value = '';
    }
  };

  return (
    <div className="parent">
      <div className="form">
        <input type="text" ref={addref} name="todo" id="todo" onKeyDown={(e) => {
        if (e.key === "Enter")
            handleadd;
        }}/>
        <button className='add' onClick={handleadd}>Add Todo</button>
      </div>
      <div className="lowerdisplay">
        {todo.map((todoItem, index) => (
          (!todoItem.completed && !done) || (todoItem.completed && done) ? (
            <Todo key={index} value={{ todo: todoItem, index }} />
          ) : null
        ))}
      </div>
    </div>
  );
};

export default Mainlist;
