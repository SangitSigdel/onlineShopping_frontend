import React from "react";
import { Router, Route } from "react-router-dom";

import "./view/css/main.css";
import Home from "./view/home";
import Cart from "./view/Cart";
import Products from "./view/Products";
import Header from "./view/HeaderCopy";
import About from "./view/About";
import historyRouter from "./historyRouter";

const App = () => {
  return (
    <div>
      <Router history={historyRouter}>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/about" exact component={About} />
        </div>
      </Router>
    </div>
  );
};

export default App;
