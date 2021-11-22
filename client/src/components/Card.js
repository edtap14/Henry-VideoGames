import React, { useEffect, useState } from "react";
import { getGames, filterGenres } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import style from "../styles/Card.module.css";

export const Card = (props) => {
  const prev = "<< Prev";
  const next = "Next >>";
  const numTarjetas = 16;

  const [currentPage, setCurrenPage] = useState(0);
  const [data, setData] = useState({
    genres: []
  });

  // console.log(props.videoGames.games.games.map((g) => g.id));
  // console.log(props);

  useEffect(() => {
    props.getGames();
  }, []);

  const filteredGames = () => {
    // console.log(props.videoGames.filGames.games);
    return props.videoGames.filGames.games.slice(
      //TODO: buscar la ruta de
      currentPage,
      currentPage + numTarjetas
    );
  };

  useEffect(() => {
    props.filterGenres(data);
  }, [data]);

  const nextPage = () => {
    if (currentPage) setCurrenPage(currentPage + numTarjetas);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrenPage(currentPage - numTarjetas);
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
    <div className={style.general}>
      {/* filtros */}
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
          name="adventure"
          value="adventure"
          onChange={handlechecked}
        ></input>
        <label>Adventure</label>
        <input className={style.inputClass} type="checkbox" name="rpg"></input>
        <label>RPG</label>
        <input
          className={style.inputClass}
          type="checkbox"
          name="strategy"
          onChange={handlechecked}
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
      {/* terminan filtros */}
      <h2>All Games</h2>
      <button type="button" onClick={prevPage}>
        {prev}
      </button>
      <button type="button" onClick={nextPage}>
        {next}
      </button>
      <div className={style.divCards}>
        {props.videoGames.filGames.games.map((g) => {
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
      <button type="button" onClick={prevPage}>
        {prev}
      </button>
      <button type="button" onClick={nextPage}>
        {next}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    videoGames: state,
    filterGames: state.filGames.games
  };
};

export default connect(mapStateToProps, { getGames, filterGenres })(Card);
