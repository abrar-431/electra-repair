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
import ServiceDetails from "../Layout/ServiceDetails";

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
            element: <Services></Services>,
            loader: ()=>fetch('http://localhost:5000/services')
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
        },
        {
          path: '/services/:id',
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;