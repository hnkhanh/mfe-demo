import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
// const Home = React.lazy(() => import("./Home"));
// const Layout = React.lazy(() => import("./Layout"));
// const About = React.lazy(() => import("./About"));

export const routes = (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  </Routes>
);
