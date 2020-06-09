import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, AllBlogs } from "./components/pages/";

const routes = [
  { path: "/", component: HomePage },
  { path: "/blogs", component: AllBlogs },
];

export const Routes = () => {
  const renderRoutes = () =>
    routes.map((route, i) => (
      <Route key={i} path={route.path} exact component={route.component} />
    ));
  return (
    <Router>
      <Switch>{renderRoutes()}</Switch>
    </Router>
  );
};
