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
import AllParcels from '../Pages/Dashboard/Admin/AllParcels';
import AllDeliveryMen from "../Pages/Dashboard/Admin/AllDeliveryMen";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import AdminUpdate from "../Pages/Dashboard/Admin/AdminUpdate/AdminUpdate";
import MyDeliveryList from "../Pages/Dashboard/DeliveryMen/MyDeliveryList";
import MyReview from "../Pages/Dashboard/DeliveryMen/MyReview";
import ReviewUpdate from "../Components/ReviewUpdate";
import DeliveryMenRoute from "./DeliveryMenRoute";
import AdminRoute from "./AdminRoute";
import DeliveryMenReviews from "../Pages/Dashboard/Admin/DeliveryMenReviews";
import MapBox from '../Components/MapBox';
import UserRoute from './UserRoute';
import ChartBoard from "../Pages/Dashboard/Admin/ChartBoard";



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
      errorElement: <Error/>,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard/>,
        },
        {
          path:'/dashboard/book',
          element: <UserRoute><BookAParcel/></UserRoute>,
        },
        {
          path:'/dashboard/myParcel',
          element: <UserRoute><MyParcels/></UserRoute>,
        },
        {
          path:'/dashboard/myProfile',
          element: <MyProfile/>,
        },
        {
          path:'/dashboard/userUpdate/:id',
          element: <UserRoute><UserUpdate/></UserRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
          path:'/dashboard/reviewUpdate/:id',
          element: <UserRoute><ReviewUpdate/></UserRoute>,
        },

        //delivery man
        {
          path:'/dashboard/myDelivery',
          element: <DeliveryMenRoute><MyDeliveryList/></DeliveryMenRoute>,
        },
        {
          path:'/dashboard/mapBox/:id',
          element: <DeliveryMenRoute><MapBox/></DeliveryMenRoute>,
        },
        {
          path:'/dashboard/myReview',
          element: <DeliveryMenRoute><MyReview/></DeliveryMenRoute>,
        },

        //admin
        {
          path:'/dashboard/allParcel',
          element: <AdminRoute><AllParcels/></AdminRoute>,
        },
        {
          path:'/dashboard/adminUpdate/:id',
          element: <AdminRoute><AdminUpdate/></AdminRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
          path:'/dashboard/allDeliveryMen',
          element: <AdminRoute><AllDeliveryMen/></AdminRoute>,
        },
        {
          path:'/dashboard/allUser',
          element: <AdminRoute><AllUser/></AdminRoute>,
        },
        {
          path:'/dashboard/ChartBoard',
          element: <AdminRoute><ChartBoard/></AdminRoute>,
        },
        {
          path:'/dashboard/DeliveryMenReview/:id',
          element: <AdminRoute><DeliveryMenReviews/></AdminRoute>,
        },

      ]
    }
  ]);