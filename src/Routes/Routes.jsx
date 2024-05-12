import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Components/Root'
import Services from "../Layout/Services";
import Home from "../Layout/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import AddService from "../Components/AddService";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/add-service',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;