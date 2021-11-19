import React from "react";

import Nav from "../components/Nav";
import SearchGame from "../components/SearchGame";
import Filtros from "../components/Filtros";
import Card from "../components/Card";
import style from "../styles/Home.module.css";
import NextPrev from "../components/NexPrev";

const Home = () => {
  return (
    <div className={style.divHome}>
      <Nav />
      <div className={style.divComponets}>
        <SearchGame />
        <Filtros />
        <Card />
      </div>
    </div>
  );
};

export default Home;
