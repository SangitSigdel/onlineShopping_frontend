import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router";

import shoppingApi from "../controller/api/shoppingApi";

const Products = () => {
  // let { url } = useRouteMatch();
  let { id } = useParams();
  // let abc = find(parseInt(id));

  console.log("the main data is ", id);
  return <div>products</div>;
};

export default Products;
