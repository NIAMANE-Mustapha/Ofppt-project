import NabvarLayout from "../Layout/NabvarLayout";
import React from "react";
import Metier from "./Metier";
import Laureat from "./Laureat";
import Entreprise from "./Entreprise";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NabvarLayout />, 
      children: [
        {
          path: "Metier",
          element: <Metier/>, 
        },
        {
          path: "Laureat",
          element: <Laureat/>, 
        },
        {
          path: "Entreprise",
          element: <Entreprise/>, 
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
