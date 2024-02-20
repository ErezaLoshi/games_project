import { RouteObject, useRoutes } from "react-router-dom";

import { RouteWrapper } from "./RouteWrapper";

import { Error404 } from "../pages/Error404/Error404";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { ResetPassword } from "../pages/ResetPassword/ResetPassword";
import AddGame from "../pages/AddGame/AddGame";

export enum RouteType {
  PUBLIC,
  PRIVATE,
  GUEST,
}

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RouteWrapper routeType={RouteType.PRIVATE}>
        <Home />
      </RouteWrapper>
    ),
  },
  {
    path: "add-game",
    element: (
      <RouteWrapper routeType={RouteType.PRIVATE}>
        <AddGame />
      </RouteWrapper>
    ),
  },
  {
    path: "update-game/:gameid",
    element: (
      <RouteWrapper routeType={RouteType.PUBLIC}>
        <AddGame />
      </RouteWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <RouteWrapper routeType={RouteType.PUBLIC}>
        <Login />
      </RouteWrapper>
    ),
  },
  {
    path: "/register",
    element: (
      <RouteWrapper routeType={RouteType.PUBLIC}>
        <Register />
      </RouteWrapper>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <RouteWrapper routeType={RouteType.PUBLIC}>
        <ResetPassword />
      </RouteWrapper>
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export const Routes = () => {
  const routes = useRoutes(appRoutes);

  return routes;
};
