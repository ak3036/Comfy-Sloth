import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { AuthWrapper } from './pages/index';

const App = () => {
  return (
    <AuthWrapper>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </AuthWrapper>
  );
};

export default App;
