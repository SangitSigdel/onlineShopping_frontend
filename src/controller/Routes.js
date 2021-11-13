import React from "react";
import { Route, Switch } from "react-router";

import Home from "../view/home";
import Products from "../view/Products";
import Cart from "../view/Cart";
import About from "../view/About";
import NoMatchUrl from "../view/NoMatchUrl";

const Routes = ({ fn_cartCount }) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home fn_cartCount={fn_cartCount} />
        </Route>
        <Route path="/product/" exact>
          <Products fn_cartCount={fn_cartCount}/>
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="*">
          <NoMatchUrl />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
