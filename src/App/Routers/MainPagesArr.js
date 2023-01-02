import React from "react";

import { Home } from "../../Pages/Home/Home";
import UserDetail from "../../Pages/Users/UserDetail";
import Users from "../../Pages/Users/Users";

export const MainPagesArr = [
  { path: "/", title: "Forside", element: <Home /> },
  { path: "/users", title: "Brugere", element: <Users /> },
  { path: "/users/:slug", title: "", element: <UserDetail /> },
];
