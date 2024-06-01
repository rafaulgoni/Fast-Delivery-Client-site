import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import AllBook from '../Pages/All Book/AllBook';
import Register from "../Auth/Register";
import LogIn from '../Auth/LogIn';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path:"/allBook",
          element: <AllBook/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/login",
          element: <LogIn/>,
        }
      ]
    },
  ]);