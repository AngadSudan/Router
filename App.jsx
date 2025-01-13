import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Drawer from './components/Drawer';
import Bus1 from './components/Bus1';
function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="flex">
          <Drawer drawer={isDrawerOpen} />
          <div className="flex-1 bg-green-400 min-h-screen">
            <Navbar drawer={isDrawerOpen} toggle={toggleDrawer} />
            <Home />
          </div>
        </div>
      ),
    },
    {
      path: '/Bus1',
      element: (
        <div className="flex">
          <Drawer drawer={isDrawerOpen} />
          <div className="flex-1 bg-green-400 min-h-screen">
            <Navbar drawer={isDrawerOpen} toggle={toggleDrawer} />
            <Bus1/>
          </div>
        </div>
      ),
    }
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;