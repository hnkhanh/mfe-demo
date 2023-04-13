import React from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./Home"));
const Layout = React.lazy(() => import("./Layout"));

export const routes = (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);
