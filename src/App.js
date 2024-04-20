import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from './pages';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/products/:id',
      element: <Home />,
      children: [
        {
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: '/checkout',
      element: <Checkout />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
};

export default App;
