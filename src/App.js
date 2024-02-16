import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

// pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import CheckOut from "./pages/CheckOut";
import SuccessPage from "./pages/SuccessPage";
import OrderStatus from "./pages/OrderStatus";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// layout
const Layout = () => {
  return (
      <div>
        <Header />
          <Outlet />
          <ToastContainer
              position="top-left"
              className="toast-container"
          />
          <Footer />
      </div>
  );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products/:id', element: <Products /> },
            { path: '/product/:id', element: <ProductDetails /> },
            { path: '/search', element: <Search /> },
            { path: '/checkout', element: <CheckOut /> },
            { path: '/success/:orderNumber', element: <SuccessPage /> },
            { path: '/order-status', element: <OrderStatus /> },
            { path: '/about-page', element: <About /> },
            // Wildcard route for handling 404 errors
            { path: '*', element: <NotFound /> } // Add a NotFoundPage component
        ]
    },
])

const App = () => {
  return (
      <div>
          <RouterProvider router={router} />
      </div>
  );
};

export default App;
