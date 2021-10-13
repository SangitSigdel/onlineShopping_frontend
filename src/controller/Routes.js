import React from "react";
import { Route, Switch } from "react-router";

import Home from "../view/home";
import Products from "../view/Products";
import Cart from "../view/Cart";
import About from "../view/About";

const Routes = ({ fn_cartCount }) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home fn_cartCount={fn_cartCount} />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
