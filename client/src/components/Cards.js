import React from "react";
import style from "../styles/Cards.module.css";

const Cards = () => {
  return (
    <>
      <div className={style.card}>
        <div>
          <h2 className="card-title">Grand Theft Auto V</h2>
          <img
            className={style.imgCards}
            src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          ></img>
          <div className={style.cardBody}>
            <h4 className="card-text">Grand Theft Auto V</h4>
            <h3>Rating:</h3>
            <p>9.5</p>
            <h3>Released:</h3>
            <p>27th May 2013</p>
            <h3>Plataformas:</h3>
            <p>PS4, Xbox One</p>
            <h3>Generos:</h3>
            <p>Aventura, Acción</p>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
