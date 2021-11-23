import React, { useState, useEffect } from "react";
import style from "../styles/Filtros.module.css";
import { filterGenres } from "../actions";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Filtros = (props) => {
  const [data, setData] = useState({
    genres: []
  });
  // console.log(data.genres);
  useEffect(() => {
    props.filterGenres(data);
  }, [data]);

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

  const nuevoArray = props.filterGames.filGames.games;

  const sortByName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  function dataOrdenada(e) {
    nuevoArray.sort(sortByName);
    setData(nuevoArray);
  }
  function dataOrdenadaB(e) {
    nuevoArray.sort(sortByName).reverse();
    setData(nuevoArray);
  }

  const sortByRating = (a, b) => {
    if (a.rating < b.rating) {
      return -1;
    }
    if (a.rating > b.rating) {
      return 1;
    }
    return 0;
  };

  function dataOrdenadaARating(e) {
    nuevoArray.sort(sortByRating);
    setData(nuevoArray);
  }
  function dataOrdenadaBRating(e) {
    nuevoArray.sort(sortByRating).reverse();
    setData(nuevoArray);
  }

  // var dataOrdenada = nuevoArray.sort(sortByName).reverse();

  function filtrado() {
    // console.log(props.filterGames.filGames.games);
    return nuevoArray;
  }
  // filtrado();
  return (
    <div className={style.divGeneral}>
      <Nav />
      <div className={style.selectFormulario}>
        <input
          className={style.inputClass}
          type="checkbox"
          name="Action"
          value="Action"
          onChange={handlechecked}
        ></input>
        <label>Action</label>
        <input
          className={style.inputClass}
          type="checkbox"
          name="Indie"
          value="Indie"
          onChange={handlechecked}
        ></input>
        <label>Indie</label>
        <input
          className={style.inputClass}
          type="checkbox"
          name="Adventure"
          value="Adventure"
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
          name="Puzzle"
          value="Puzzle"
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
          name="Massive Multiplayer"
          value="Massive Multiplayer"
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
          value="Fighting"
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
          name="Board Games"
          value="Board Games"
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
      <div>
        <button onClick={dataOrdenada}>A-Z</button>
        <button onClick={dataOrdenadaB}>Z-A</button>
        <button onClick={dataOrdenadaARating}>1-5</button>
        <button onClick={dataOrdenadaBRating}>5-1</button>
      </div>
      <h3>Games: {data.genres}</h3>
      <div className={style.divCards}>
        {/* {filtrado().map((g) => g.name)} */}
        {filtrado().map((g) => {
          return (
            <div className={style.card} key={g.name}>
              <div>
                <h3 className={style.cardTitle}>{g.name.toUpperCase()}</h3>
                <img
                  className={style.imgCards}
                  src={g.background_image}
                  alt="img Game"
                ></img>
                <div className={style.cardBody}>
                  <h4 className="card-text">{g.slug.toUpperCase()}</h4>
                  <h3>Rating:</h3>
                  <p>{g.rating}</p>
                  <h3>Released:</h3>
                  <p>{g.released}</p>
                  <h3>Plataformas:</h3>
                  <p>
                    {g.platforms.map((p) => (
                      <span key={p.id}>{p.name}, </span>
                    ))}
                  </p>
                  <h3>Generos:</h3>
                  <p>
                    {g.genres.map((gen) => (
                      <span>{gen.name}, </span>
                    ))}
                  </p>
                  <Link to={`/details/${g.id}`}>
                    <button className={style.moreInfo} type="submit">
                      More Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    filterGames: state
  };
};

export default connect(mapStateToProps, { filterGenres })(Filtros);
