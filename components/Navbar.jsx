import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <nav className='fixed items-center top-0 w-full flex justify-between bg-purple-800 py-4 z-50'>
        <div className="logo">
            <button 
            onClick={props.toggle} 
            className="bg-blue-500 ml-4 text-white px-4 py-2 rounded">
                iTask
            </button>
        </div>
        <div className="logo">
            <span className='text-3xl ml-16 pl-12'><b>CBUS</b></span>
        </div>
        <ul className="flex  gap-8 mx-9">
            <li className=''>
                <Link to="/">Home</Link>
            </li>
            <li className=''>Your Tasks</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navbar;
