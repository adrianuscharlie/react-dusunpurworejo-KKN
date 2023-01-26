import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
    <Footer/>
    </>
  );
}
