import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
import EntrepriseIdentif from "./EntrepriseIdentif";
import EntrepriseCompetence from "./EntrepriseCompetence";
import EntrepriseLaureat from "./EntrepriseLaureat";
import EntrepriseOffre from "./EntrepriseOffre";
import EntrepriseContact from "./EntrepriseContact";
import InscriptionLaureat from "./InscriptionLaureat";
import ProfileInfo from "./laureat/ProfileInfo";
import LastOffers from "./laureat/LastOffers";


export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NabvarLayout />,
      children: [
        {
          path: "",
          element: <Metier />,
        },
        {
          path: "Laureat",
          element: <Laureat />,
          children: [
            {
              path: "",
              element: <LaureatProfil />,
              children: [
                {
                  path: "",
                  element: <ProfileInfo />,
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
              ],
            },

            {
              path: "laureatOffre",
              element: <LaureatOffre />,
            },
            {
              path: "LastOffers",
              element: <LastOffers />,
            },

          ],
        },
        {
          path: "Entreprise",
          element: <Entreprise />,
          children: [
            {
              path: "",
              element: <EntrepriseIdentif />,
            },
            {
              path: "entrepriseCompetence",
              element: <EntrepriseCompetence />,
            },
            {
              path: "entrepriseLaureat",
              element: <EntrepriseLaureat />,
            },
            {
              path: "entrepriseOffre",
              element: <EntrepriseOffre />,
            },
            {
              path: "entrepriseContact",
              element: <EntrepriseContact />,
            },
          ],
        },
        ,
        {
          path: "InscriptionLaureat",
          element: <InscriptionLaureat />,
        },
        {
          path: "InscriptionEntreprise",
          element: <InscriptionEntreprise />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
