import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/pages/";

const routes = [{ path: "/", component: HomePage }];

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
