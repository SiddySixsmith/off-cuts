import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Navigation from "./nav";
import Social from "./socialLinks";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Login from "./pages/login";
// import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Brand from "./findByBrand";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function HomepageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "AboutUs") {
      return <AboutUs />;
    }
    if (currentPage === "Brand") {
      return <Brand />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    // if (currentPage === "Cart") {
    //   return <Cart />;
    // }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}
