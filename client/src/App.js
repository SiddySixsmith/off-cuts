import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/header";
import Footer from "./components/footer";
import Navigation from "./components/nav";
import Social from "./components/socialLinks";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import Login from "./components/pages/login";
import Cart from "./components/pages/cart";
import Contact from "./components/pages/contact";
import FindBrand from "./components/pages/brandSearch";
import FindCatergory from "./components/pages/catergorySearch";
import AllProducts from "./components/pages/allProductsSearch";
import SingleProductSearch from "./components/pages/singleProductSearch"
import Signup from "./components/pages/signup";
import Profile from "./components/pages/profile"
import "./styles/App.css";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

        <div className="App">
          <Social />

          <Header />

          <Navigation />
          <Route exact path={"/profile"} component={Profile} />
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/about"} component={AboutUs} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/cart"} component={Cart} />
          <Route exact path={"/all-products"} component={AllProducts} />
          <Route exact path={"/catergory-search"} component={FindCatergory} />
          <Route exact path={"/brand-search"} component={FindBrand} />
          {/* <Route exact path={"/colour-search"} component={FindColour} /> */}
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={`/single-product/:_id`} component={SingleProductSearch} />

          <Footer />
        </div>

      </Router>
    </ApolloProvider>
  );
}
export default App;
