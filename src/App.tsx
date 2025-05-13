import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";

import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";

// import { useUser } from "./redux/userSlice";

const Layout = () => {
  return (
    <div className="md:w-8/12 mx-auto">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/explore",
        element: <Explore/>,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signout",
        element: <Signin />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
