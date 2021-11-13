import React from "react";

import Nav from "../components/Nav";
import SearchGame from "../components/SearchGame";
import Filtros from "../components/Filtros";
import Card from "../components/Card";
import style from "../styles/Home.module.css";

const Home = () => {
  // fetch(`http://localhost:3001/videogames`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

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
