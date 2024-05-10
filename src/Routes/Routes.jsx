import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Components/Root'
import Services from "../Layout/Services";
import Home from "../Layout/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";

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
        }
      ]
    },
  ]);

  export default router;