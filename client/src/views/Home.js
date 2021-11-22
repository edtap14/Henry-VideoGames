import React from "react";

import Nav from "../components/Nav";
import Filtros from "../components/Filtros";
import Card from "../components/Card";
import style from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={style.divHome}>
      <Nav />
      <div className={style.divComponets}>
        {/* <SearchGame /> */}
        <Filtros />
        <Card />
      </div>
    </div>
  );
};

export default Home;
