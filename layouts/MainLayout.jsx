import React from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
