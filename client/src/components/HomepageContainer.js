import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Navigation from "./nav";
import Social from "./socialLinks";
import Home from "./pages/home";
// import AboutUs from "./pages/aboutUs";
// import Cart from "./pages/cart";
import Contact from "./pages/contact";

export default function HomepageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    // if (currentPage === "AboutUs") {
    //   return <AboutUs />;
    // }
    // if (currentPage === "Cart") {
    //   return <Cart />;
    // }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div>
        <Social />
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        {renderPage()}
        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </>
  );
}
