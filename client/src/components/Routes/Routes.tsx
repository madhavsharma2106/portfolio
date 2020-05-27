import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

const routes: RouteProps[] = [{ path: "/", component: HomePage }];

export const Routes = () => {
  const renderRoutes = () =>
    routes.map((route, i) => (
      <Route key={i} path={route.path} component={route.component} />
    ));
  return (
    <Router>
      <Switch>{renderRoutes()}</Switch>
    </Router>
  );
};
