import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home Page/Home";
import Destination from "../Pages/Destination/Destination";
import Register from "../Pages/Authentication/Register";
import LogIn from "../Pages/Authentication/LogIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/destination",
            element: <Destination></Destination>,
        },
        {
            path: "/login",
            element: <LogIn></LogIn>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router;