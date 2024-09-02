import React from 'react';
import Header from "./header/Header";
import CardList from './main/CardList';
import Footer from './footer/Footer';
import Carrusel from './carrusel/Carrusel';
import MagicHeader from './magicHeader/MagicHeader';
import MagicMenu from './magicMenu/MagicMenu';

function Inicio() {
    return (
      <div>
        <Carrusel/>
        <CardList/>
        <Footer/>
      </div>
    );
}
  
export default Inicio;