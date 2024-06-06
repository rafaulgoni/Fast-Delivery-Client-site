import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import Register from "../Auth/Register";
import LogIn from '../Auth/LogIn';
import DashboardLayOut from "../Layout/DashboardLayOut";
import BookAParcel from "../Pages/Dashboard/BookAParcel";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyParcels from "../Pages/Dashboard/MyParcels";
import MyProfile from "../Pages/Dashboard/MyProfile";
import PrivateRoute from "./PrivateRoute";
import UserUpdate from "../Components/UserUpdate";

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
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/login",
          element: <LogIn/>,
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><DashboardLayOut/></PrivateRoute> ,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard/>
        },
        {
          path:'/dashboard/book',
          element: <BookAParcel/>
        },
        {
          path:'/dashboard/myParcel',
          element: <MyParcels/>
        },
        {
          path:'/dashboard/myProfile',
          element: <MyProfile/>
        },
        {
          path:'/dashboard/userUpdate/:id',
          element: <UserUpdate/>,
          loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
        },
      ]
    }
  ]);