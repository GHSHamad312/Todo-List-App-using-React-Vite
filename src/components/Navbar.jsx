import './navbar.css';
import React, { useState, useContext } from 'react';
import { context } from '../contexts/context';

const Navbar = () => {
  const { done, setDone } = useContext(context);
  const [text, setText] = useState("Show Done");

  const handleDone = () => {
    setDone(prevDone => {
      const newDone = !prevDone;
      setText(newDone ? "Show Active" : "Show Done");
      return newDone;
    });
  };

  return (
    <div className="navbar">
      <div className="rightside">
        <div className="icon"></div>
        Metro List
      </div>
      <div className="buttons">
        <button className='done' onClick={handleDone}>{text}</button>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
