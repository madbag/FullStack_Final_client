import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home"
import Profile from "./pages/Profile"

const Layout = () => {
  return (
    <div className="md:w-8/12 mx-auto">
      <h1>Navbar</h1>
      <Outlet></Outlet>
      {/* for all the pages */}
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      // {
      //   path: "/explore",
      //   element: <Explore />,
      // },
      // {
      //   path: "/signin",
      //   element: <Signin />,
      // },
      // {
      //   path: "/signout",
      //   element: <Signin />,
      // },
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
