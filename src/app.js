import React from "react";
import { Router } from "react-router-dom";

import "./view/css/main.css";
import Header from "./view/HeaderCopy";
import historyRouter from "./historyRouter";
import Routes from "./controller/Routes";

class App extends React.Component {
  state = {
    cartCount: 0,
  };

  fn_cartCount = (count) => {
    this.setState({ cartCount: count });
    return this.state.cartCount;
  };

  render() {
    return (
      <div>
        <Router history={historyRouter}>
          <div>
            <div className="header">
              <Header fn_cartCount={this.fn_cartCount} />
            </div>
            <Routes fn_cartCount={this.fn_cartCount} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
