import React from "react";
import Nav from "../components/Nav";
import Formulario from "../components/Formulario";
import style from "../styles/YourGame.module.css";

const YourGame = () => {
  return (
    <div className={style.divFirst}>
      <Nav />
      <div className={style.formulario}>
        <Formulario />
      </div>
    </div>
  );
};

export default YourGame;
