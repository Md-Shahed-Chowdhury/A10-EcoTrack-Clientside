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
import { axiosInstance } from "../hooks/UseAxios";
import ChallengeDetails from "../pages/ChallengeDetails";
import MyChallenges from "../pages/MyChallenges";
import MyActivitiesDetails from "../pages/MyActivitiesDetails";
import UpdateChallenge from "../pages/UpdateChallenge";
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
        loader: () => axiosInstance.get("/challenges"),
      },
      {
        path: "/challenges/:id",
        element: (
          <PrivateRoute>
            <ChallengeDetails></ChallengeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => axiosInstance.get(`/challenges/${params.id}`),
      },
      {
        path: "/my-activities",
        element: (
          <PrivateRoute>
            <MyActivities></MyActivities>
          </PrivateRoute>
          
        ),
        
      },
      {
        path: "/my-activities/:id",
        element:<PrivateRoute><MyActivitiesDetails></MyActivitiesDetails></PrivateRoute>
      },
      {
        path: "/updateChallenge/:id",
        element:<PrivateRoute><UpdateChallenge></UpdateChallenge></PrivateRoute>
      },
      {
        path: "/challenges/add",
        element: (
          <PrivateRoute>
            <AddChallenge></AddChallenge>
          </PrivateRoute>
        ),
      },
      {
        path:"/myChallenges",
        element:<PrivateRoute><MyChallenges></MyChallenges></PrivateRoute>,
       
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
