import React, { useState } from "react";

import history from "../historyRouter";
import "./css/searchBar.css";

const SerachBar = () => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    history.push(`product?category=${term}`);
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={term}
          className="search__bar"
          placeholder="Search products . . . ."
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default SerachBar;
