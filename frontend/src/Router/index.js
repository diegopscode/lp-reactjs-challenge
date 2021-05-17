import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";

const RouterConfig = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/product/:id">
        <ProductDetail />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
);
export default RouterConfig;
