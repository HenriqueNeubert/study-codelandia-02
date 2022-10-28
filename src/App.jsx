import React from "react";
import Band from "./components/Band";
import BandTitle from "./components/BandTitle";
import Button from "./components/buttons/Button";
import Banner from "./components/banner/Banner";
import ListProduct from "./components/product/ListProduct";

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
      <div>
        <BandTitle
          color="#212529"
          background="#fff"
          alignX="center"
          title="Destaques"
          description="Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. "
        />        
        <ListProduct quantity="9" alignX="center" />
        <ListProduct quantity="9" alignX="center" />        
      </div>
      <div>
        <BandTitle
          color="#212529"
          background="#fff"
          alignX="center"
          title="Novidades"
          description="Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. "
        />
        <ListProduct quantity="9" alignX="center" />
        <ListProduct quantity="9" alignX="center" />
      </div>
      <div className="py-5">
        <div className="container text-center">
          <Button
            title="Ver Mais"
            color="#fff"
            backgroundColor="#212529"
          />
        </div>
      </div>
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
