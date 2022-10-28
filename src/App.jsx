import React from "react";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import HeaderTop from "./components/header/HeaderTop";
import HeaderBottom from "./components/header/HeaderBottom";

function App() {
  return (
    <>
      <header>
        <HeaderTop
          title="Ganhe R$ 10,00 de desconto no frete"
          background="#212529"
          color="#fff"
          align="center"
        />
        <HeaderBottom
          title="JordanShoes"
          background="#fff"
          color="#212529"
          align="center"
        />
      </header>
      <Banner
        color="#fff"
        title="A melhor loja de Jordan"
        description="O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."
        alignX="end"
        alignY="center"
      ></Banner>
      <Footer
        title="Todos os direitos reservados."
        background="#212529"
        color="#fff"
        align="start"></Footer>
    </>
  );
}

export default App;
