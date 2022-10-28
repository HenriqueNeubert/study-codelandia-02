import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

export default (props) => {
  return (
    <div>
      <HeaderTop
        title="Ganhe R$ 10,00 de desconto no frete" 
        background='#212529'
        color='#fff'
        align="center"
      />
      <HeaderBottom
        title="JordanShoes" 
        background='#fff'
        color='#212529'
        align="center" 
      />
    </div>
  );
};
