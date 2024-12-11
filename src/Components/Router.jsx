import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NabvarLayout from "../Layout/NabvarLayout";
import Metier from "./Metier";
import Laureat from "./laureat/Laureat";
import LaureatProfil from "./laureat/LaureatProfil";
import LaureatExperience from "./laureat/LaureatExperience";
import LaureatDiplome from "./laureat/LaureatDiplome";
import LaureatLangues from "./laureat/LaureatLangues";
import LaureatOffre from "./laureat/LaureatOffre";
import Entreprise from "./Entreprise";
import InscriptionEntreprise from "./InscriptionEntreprise";

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
        {
          path: "InscriptionEntreprise",
          element: <InscriptionEntreprise />,
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
