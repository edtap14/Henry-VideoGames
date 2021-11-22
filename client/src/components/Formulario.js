import React, { useState } from "react";

import style from "../styles/Formulario.module.css";

const Formulario = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    date: "",
    rating: 0,
    genres: []
  });

  // const [checked, setChecked] = useState({
  //   action: false,
  //   indie: false,
  //   adventure: false,
  //   rpg: false,
  //   strategy: false,
  //   shuter: false,
  //   casual: false,
  //   simulation: false,
  //   puzzle: false,
  //   arcade: false,
  //   platformer: false,
  //   racing: false,
  //   massivelMultiplayer: false,
  //   sports: false,
  //   figthing: false,
  //   family: false,
  //   boardGames: false,
  //   educational: false
  // });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handlechecked = (e) => {
    if (data.genres.includes(e.target.value)) {
      setData({
        genres: data.genres.filter((g) => g !== e.target.value)
      });
    } else {
      setData({
        ...data,
        genres: [...data.genres, e.target.value]
      });
    }
  };

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
            onChange={handleChange}
            name="name"
          ></input>
          <label className={style.lebelFormulario}>Description: </label>
          <textarea
            className={(style.inputFormulario, style.texta)}
            type="textarea"
            placeholder="Description"
            onChange={handleChange}
            name="description"
          ></textarea>
          <label className={style.lebelFormulario}>Released:</label>
          <input
            className={style.inputFormulario}
            type="date"
            name="date"
            onChange={handleChange}
          ></input>
          <label className={style.lebelFormulario}>Rating:</label>
          <input
            className={style.inputFormulario}
            type="number"
            placeholder="1 - 5"
            name="rating"
            onChange={handleChange}
          ></input>
          <label className={style.lebelFormulario}>Genre:</label>
          <div className={style.selectFormulario}>
            <input
              className={style.inputClass}
              type="checkbox"
              name="action"
              value="action"
              onChange={handlechecked}
            ></input>
            <label>Action</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="indie"
              value="indie"
              onChange={handlechecked}
            ></input>
            <label>Indie</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="adventure"
              value="adventure"
              onChange={handlechecked}
            ></input>
            <label>Adventure</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="rpg"
            ></input>
            <label>RPG</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="strategy"
              onChange={handleChange}
            ></input>
            <label>Strategy</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="shuter"
            ></input>
            <label>Shuter</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="casual"
            ></input>
            <label>Casual</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="simulation"
            ></input>
            <label>Simulation</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="puzle"
            ></input>
            <label>Puzzle</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="arcade"
            ></input>
            <label>Arcade</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="platformer"
            ></input>
            <label>Platformer</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="racing"
            ></input>
            <label>Racing</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="massivel Multiplayer"
            ></input>
            <label>Massivel Multiplaye</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="sports"
            ></input>
            <label>Sports</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="figthing"
            ></input>
            <label>Figthing</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="family"
            ></input>
            <label>Family</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="boardGames"
            ></input>
            <label>Board Games</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="educational"
            ></input>
            <label>Educational</label>
          </div>
          <label className={style.lebelFormulario}>Platforms:</label>
          <div className={style.selectFormulario}>
            <label>PlayStation 5</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="PalyStation 5"
            ></input>
            <label>PlayStation 4</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Playstation 4"
            ></input>
            <label>PlayStation 3</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Playstation 3"
            ></input>
            <label>Xbox 360</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Xbox 360"
            ></input>
            <label>Xbox One</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Xbox One"
            ></input>
            <label>Xbox Series S/X</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="XboxSeries S/X"
            ></input>
            <label>PC</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="PC"
            ></input>
          </div>
          <button className={style.buttonForm} type="submit">
            Send Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
