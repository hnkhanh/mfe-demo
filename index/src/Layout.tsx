import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>

      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
