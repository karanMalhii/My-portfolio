import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
}
