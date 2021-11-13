import React from "react";

import Cards from "./Cards";
import style from "../styles/Card.module.css";

const Card = () => {
  return (
    <>
      <div className={style.general}>
        <h2>All Games</h2>
        <div className={style.divCards}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Card;
