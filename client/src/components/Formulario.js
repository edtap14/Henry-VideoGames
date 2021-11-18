import React from "react";

import style from "../styles/Formulario.module.css";

const Formulario = () => {
  return (
    <div>
      <div className={style.firstDiv}>
        <h2>Create YourGame</h2>
        <form className={style.form}>
          <label className={style.lebelFormulario}>Name: </label>
          <input
            className={style.inputFormulario}
            type="text"
            placeholder="Name of Game"
          ></input>
          <label className={style.lebelFormulario}>Description: </label>
          <input
            className={style.inputFormulario}
            type="text"
            placeholder="Description"
          ></input>
          <label className={style.lebelFormulario}>Released:</label>
          <input className={style.inputFormulario} type="date"></input>
          <label className={style.lebelFormulario}>Rating:</label>
          <input
            className={style.inputFormulario}
            type="number"
            placeholder="1 - 5"
          ></input>
          <label className={style.lebelFormulario}>Genre:</label>
          <select className={style.selectFormulario}>
            <option>Action</option>
          </select>
          <label className={style.lebelFormulario}>Platforms:</label>
          <select className={style.selectFormulario}>
            <option>xBox</option>
            <option>Playstation</option>
            <option>PC</option>
          </select>
          <button className={style.buttonForm} type="submit">
            Send Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
