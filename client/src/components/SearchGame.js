import React from "react";
import style from "../styles/SearchGame.module.css";

const SearchGame = () => {
  return (
    <>
      <div className={style.searchgame}>
        <div className={style.searchgame__input}>
          <input
            className={style.inputSearch}
            type="text"
            placeholder="Search a Game"
          />
        </div>
        <div className={style.searchgame__button}>
          <button className={style.buttonPlay}>Play</button>
          <button className={style.buttonReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default SearchGame;
