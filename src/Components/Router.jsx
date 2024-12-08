import NabvarLayout from "../layout/NabvarLayout";
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function Header() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NabvarLayout />, 
      children: [
        {
          path: "/",
          element: <NavBar />, 
        },
      ],
    },
  ]);
  

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}
