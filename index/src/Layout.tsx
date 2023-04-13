import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>

      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
