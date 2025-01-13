import React from 'react';
import { FaBus } from 'react-icons/fa'; // Using react-icons for bus icons
import { Link } from 'react-router-dom';
const Drawer = (props) => {
  return (
    <div 
        className={`bg-slate-400 fixed top-16 left-0 h-[calc(100%-4rem)] w-40 shadow-md transform ${props.drawer ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <div className="p-4">
          <p className="text-cyan-800 text-lg font-bold mb-4">BUSES</p>
          <ul className="space-y-4">
              <li className='flex items-center'>
                  <FaBus className="text-cyan-800 mr-2" />
                  <Link to="/Bus1" className="text-white">Bus1</Link>
              </li>
              <li className='flex items-center'>
                  <FaBus className="text-cyan-800 mr-2" />
                  <Link to="/" className="text-white">Bus2</Link>
              </li>
              <li className='flex items-center'>
                  <FaBus className="text-cyan-800 mr-2" />
                  <Link to="/" className="text-white">Bus3</Link>
              </li>
          </ul>
        </div>
      </div>
  )
}

export default Drawer;
