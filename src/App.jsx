import React from "react";
import Band from "./components/Band";
import BandTitle from "./components/BandTitle";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <>
      <header>
        <Band
          title="Ganhe R$ 10,00 de desconto no frete"
          background="#212529"
          color="#fff"
          align="center"
          tag="p"
        />
        <Band
          title="JordanShoes"
          background="#fff"
          color="#212529"
          align="center"
          tag="h1"
          class="title"
        />
      </header>
      <Banner
        color="#fff"
        title="A melhor loja de Jordan"
        description="O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."
        alignX="end"
        alignY="center"
      ></Banner>
      <BandTitle
        color="#fff"
        background="#212529"
        alignX="center"
        title="Destaques"
        description="Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. "
      />
      <footer>
        <Band
          title="Todos os direitos reservados."
          background="#212529"
          color="#fff"
          align="center"
          tag="p"
        />
      </footer>
    </>
  );
}

export default App;
