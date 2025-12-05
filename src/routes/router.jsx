import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Challenges from "../pages/Challenges";
import MyActivities from "../pages/MyActivities";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PageNotFound from "../layouts/PageNotFound";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../pages/PrivateRoute";
import ForgetPass from "../pages/ForgetPass";
import AddChallenge from "../pages/AddChallenge";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/challenges",
        element: <Challenges></Challenges>,
      },
      {
        path: "/myActivities",
        element: <PrivateRoute><MyActivities></MyActivities></PrivateRoute>,
      },
      {
        path:'/challenges/add',
        element:<PrivateRoute><AddChallenge></AddChallenge></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/forget-password",
        element: <ForgetPass></ForgetPass>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
export default router;
