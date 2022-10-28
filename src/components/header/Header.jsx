import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

export default (props) => {
  return (
    <div>
      <HeaderTop 
        title="Ganhe R$ 10,00 de desconto no frete" 
        color="#181818"
        align="center"
      >
        <div>ada</div>
      </HeaderTop>
      <HeaderBottom>
        <div className="container"></div>
      </HeaderBottom>
    </div>
  );
};
