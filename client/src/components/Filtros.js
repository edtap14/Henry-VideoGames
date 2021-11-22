import React from "react";
import style from "../styles/Filtros.module.css";

const Filtros = () => {
  return (
    <>
      <div className={style.divFilters}>
        <h4>Sort by</h4>
        <button className={style.select}>A - Z</button>
        <h4>Categorias: </h4>
        <form className={style.filterBox}>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Action</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Indie</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Adventure</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>RPG</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Strategy</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Shuter</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Casual</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Simulation</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Puzzle</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Arcade</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Platformer</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Racing</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Massivel Multiplaye</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Sports</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Figthing</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Family</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Board Games</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Educational</label>
          <input
            className={style.inputClass}
            type="checkbox"
            name="genreGame"
          ></input>
          <label>Card</label>
        </form>
      </div>
    </>
  );
};

export default Filtros;
