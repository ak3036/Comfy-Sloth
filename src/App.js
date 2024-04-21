import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
