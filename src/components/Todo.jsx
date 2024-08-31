import './todo.css';
import React, { useContext, useState } from 'react';
import { context } from '../contexts/context';

const Todo = ({ value }) => {
  const [editmode, seteditmode] = useState(false);
  const [editValue, setEditValue] = useState(value.todo.body);
  const temp = useContext(context);

  const handledel = () => {
    temp.settodo(temp.todo.filter((todo) => todo.id !== value.todo.id));
  };

  const handleedit = () => {
    seteditmode(!editmode);
    setEditValue(value.todo.body);
  };

  const handlecomplete = () => {
    temp.settodo(
      temp.todo.map((element) => {
        if (element.id === value.todo.id) {
          element.completed = true;
        }
        return element;
      })
    );
  };

  const handleconfirm = () => {
    temp.settodo(
      temp.todo.map((element) => {
        if (element.id === value.todo.id) {
          element.body = editValue;
        }
        return element;
      })
    );
    seteditmode(false);
  };

  return (
    <div className={editmode ? 'editmode' : 'todoparent'}>
      <div className="title">TODO #{value.index + 1}</div>
      {editmode ? (
        <div className="editbox">
          <input
            type="text"
            id="editinp"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <div className="controls">
            <button className='edit confirm' onClick={handleconfirm}>Save</button>
            <button className='delete' onClick={() => setEditValue('')}>Clear</button>
            <button className='complete' onClick={() => seteditmode(false)}>Back</button>
          </div>
        </div>
      ) : (
        <>
          <div className={value.todo.completed ? 'strike body' : 'body'}>{value.todo.body}</div>
          <div className="controls">
            <button className='edit' onClick={handleedit}>Edit</button>
            <button className='delete' onClick={handledel}>Delete</button>
            <button className='complete' onClick={handlecomplete}>Done</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;

// text-decoration: line-through;