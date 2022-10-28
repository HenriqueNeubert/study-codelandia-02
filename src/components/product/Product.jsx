import React from "react";
import ProductItem from "../../../images/tennis.svg";

export default (props) => {
  return (
    <div class="g-3">
      <div className="bg-dark">
        <img className="w-100 p-4" src={ProductItem} alt="Tennis black nike" />
      </div>
    </div>
  );
};
