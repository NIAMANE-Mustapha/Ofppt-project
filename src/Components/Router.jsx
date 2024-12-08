import NavBar from "./Navbar";
import React from "react";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";

export default function Header() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
        {
          path: "/",
          element: <NavBar />, 
        },
      ],
    },
  ]);
  

  function Liens() {
    return (
      <div className="container p-2 my-2">
        <nav className="nav bg-danger text-white d-flex justify-content-end">
          <NavLink
            className="nav-link"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
            })}
          >
            Accueil
          </NavLink>
          <NavLink
            className="nav-link"
            to="/Produits"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
            })}
          >
            Produits
          </NavLink>
          <NavLink
            className="nav-link"
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
            })}
          >
            Contact
          </NavLink>
        </nav>
        <div className="container p-2">
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <RouterProvider router={route} />
    </div>
  );
}
