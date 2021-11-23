import React, { useState } from "react";

import style from "../styles/Formulario.module.css";

const Formulario = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    date: "",
    Ranking: 0,
    genres: [],
    plataformas: []
  });

  const nuevaData = {
    name: data.name,
    description: data.description,
    date: data.date,
    Ranking: data.Ranking,
    genres: data.genres.toString(),
    plataformas: data.plataformas.toString()
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handlechecked = (e) => {
    if (data.genres.includes(e.target.value)) {
      setData({
        ...data,
        genres: data.genres.filter((g) => g !== e.target.value)
      });
    } else {
      setData({
        ...data,
        genres: [...data.genres, e.target.value]
      });
    }
  };

  const handlecheckedPlatforms = (e) => {
    if (data.plataformas.includes(e.target.value)) {
      setData({
        ...data,
        plataformas: data.plataformas.filter((g) => g !== e.target.value)
      });
    } else {
      setData({
        ...data,
        plataformas: [...data.plataformas, e.target.value]
      });
    }
  };

  const onSubmit = async (e) => {
    const response = await fetch("http://localhost:3001/videogames/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevaData)
    });
    const game = await response.json();
    alert("el videojuego fue creado");
    setData({
      name: "",
      description: "",
      date: "",
      Ranking: 0,
      genres: [],
      plataformas: []
    });
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
            name="Ranking"
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
              name="RPG"
              value="RPG"
              onChange={handlechecked}
            ></input>
            <label>RPG</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Strategy"
              value="Strategy"
              onChange={handlechecked}
            ></input>
            <label>Strategy</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Shuter"
              value="Shuter"
              onChange={handlechecked}
            ></input>
            <label>Shuter</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Casual"
              value="Casual"
              onChange={handlechecked}
            ></input>
            <label>Casual</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Simulation"
              value="Simulation"
              onChange={handlechecked}
            ></input>
            <label>Simulation</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Puzle"
              value="Puzle"
              onChange={handlechecked}
            ></input>
            <label>Puzzle</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Arcade"
              value="Arcade"
              onChange={handlechecked}
            ></input>
            <label>Arcade</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Platformer"
              value="Platformer"
              onChange={handlechecked}
            ></input>
            <label>Platformer</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Racing"
              value="Racing"
              onChange={handlechecked}
            ></input>
            <label>Racing</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="MassivelMultiplayer"
              value="MassivelMultiplayer"
              onChange={handlechecked}
            ></input>
            <label>Massivel Multiplayer</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Sports"
              value="Sports"
              onChange={handlechecked}
            ></input>
            <label>Sports</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Figthing"
              value="Figthing"
              onChange={handlechecked}
            ></input>
            <label>Figthing</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Family"
              value="Family"
              onChange={handlechecked}
            ></input>
            <label>Family</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="BoardGames"
              value="BoardGames"
              onChange={handlechecked}
            ></input>
            <label>Board Games</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Educational"
              value="Educational"
              onChange={handlechecked}
            ></input>
            <label>Educational</label>
          </div>
          <label className={style.lebelFormulario}>Platforms:</label>
          <div className={style.selectFormulario}>
            <label>PlayStation 5</label>
            <input
              className={style.inputClass}
              type="checkbox"
              value="PlayStation5"
              name="PalyStation5"
              onClick={handlecheckedPlatforms}
            ></input>
            <label>PlayStation 4</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Playstation4"
              value="PalyStation4"
              onClick={handlecheckedPlatforms}
            ></input>
            <label>PlayStation 3</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Playstation3"
              value="PalyStation3"
              onClick={handlecheckedPlatforms}
            ></input>
            <label>Xbox 360</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="Xbox360"
              value="Xbox360"
              onClick={handlecheckedPlatforms}
            ></input>
            <label>Xbox One</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="XboxOne"
              value="XboxOne"
              onClick={handlecheckedPlatforms}
            ></input>
            <label>Xbox Series S/X</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="XboxSeriesS/X"
              value="XboxSeriesS/X"
              onClick={handlecheckedPlatforms}
            ></input>
            <label>PC</label>
            <input
              className={style.inputClass}
              type="checkbox"
              name="PC"
              value="PC"
              onClick={handlecheckedPlatforms}
            ></input>
          </div>
          <button onClick={onSubmit} className={style.buttonForm} type="submit">
            Create Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
