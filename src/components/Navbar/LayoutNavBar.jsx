import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function LayoutNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default LayoutNavbar;