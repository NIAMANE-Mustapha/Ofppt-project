import NabvarLayout from "../Layout/NabvarLayout";
import React from "react";
import Metier from "./Metier";
import Laureat from "./laureat/Laureat";
import Entreprise from "./Entreprise";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LaureatProfil from "./laureat/LaureatProfil";
import LaureatExperience from "./laureat/LaureatExperience";
import LaureatDiplome from "./laureat/LaureatDiplome";
import LaureatLangues from "./laureat/LaureatLangues";
import LaureatOffre from "./laureat/LaureatOffre";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NabvarLayout />,
      children: [
        {
          path: "Metier",
          element: <Metier />,
        },
        {
          path: "Laureat",
          element: <Laureat />,
          children: [
            {
              path: "",
              element: <LaureatProfil />,
            },
            {
              path: "laureatExperience",
              element: <LaureatExperience />,
            },
            {
              path: "laureatDiplome",
              element: <LaureatDiplome />,
            },
            {
              path: "laureatLangue",
              element: <LaureatLangues />,
            },
            {
              path: "laureatOffre",
              element: <LaureatOffre />,
            },
          ],
        },
        {
          path: "Entreprise",
          element: <Entreprise />,
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
