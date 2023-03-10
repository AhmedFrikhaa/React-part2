import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import UserPage from "./pages/UserPage";
import Users from "./pages/HttpCall";



const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,

    },
    {
        path: "/home",
        element:<HomePage/>,

    },
    {
        path: "/app",
        element: <App />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path:"/user/:id",
        element:<UserPage/>
    },
    {
        path:"/users",
        element:<Users/>
    }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
