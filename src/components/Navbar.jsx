import './navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="rightside">
        <div className="icon"></div>
        Metro List
      </div>
        <div>
            
        </div>
        <div className="buttons">
            <button className='madeby'>Made By</button>
            <button className='done'>Done Tasks</button>
            <div className="checkbox">
              <input type="checkbox" />
            </div>
        </div>
    </div>
  )
}

export default Navbar