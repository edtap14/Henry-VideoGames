import React, { useState, useEffect } from "react";
import style from "../styles/SearchGame.module.css";
import { findGame } from "../actions";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const SearchGame = (props) => {
  const [game, SetGame] = useState("");

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetGame(search);
  };

  useEffect(() => {
    props.findGame(game);
  }, [game]);

  // console.log(props.games.fgames.game.map((g) => g.name));

  return (
    <div className={style.principalDiv}>
      <Nav />
      <div className={style.searchgame}>
        <div className={style.searchgame__input}>
          <input
            className={style.inputSearch}
            type="text"
            placeholder="Search a Game"
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className={style.searchgame__button}>
          <button
            className={style.buttonPlay}
            type="submit"
            onClick={handleSubmit}
          >
            SearchGame
          </button>
        </div>
      </div>
      <div className={style.general}>
        <div className={style.divCards}>
          {props.games.fgames.game.map((g) => {
            return (
              <div className={style.card} key={g.id}>
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
                    {/* <p>
                    {g.platforms.map((p) => (
                      <span key={p.id}>{p.name}, </span>
                    ))}
                  </p> */}
                    <h3>Generos:</h3>
                    {/* <p>
                    {g.genres.map((gen) => (
                      <span>{gen.name}, </span>
                    ))}
                  </p> */}
                    <Link to={`/details/${g.id}`}>
                      <button className={style.moreInfo}>More Info</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    games: state
  };
};

export default connect(mapStateToProps, { findGame })(SearchGame);
