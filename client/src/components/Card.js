import React, { useEffect, useState } from "react";
import { getGames } from "../actions";
import { connect } from "react-redux";

import style from "../styles/Card.module.css";

export const Card = (props) => {
  const prev = "<< Prev";
  const next = "Next >>";
  const numTarjetas = 16;

  const [currentPage, setCurrenPage] = useState(0);

  // console.log(props.videoGames.games.games.map((g) => g.id));
  console.log(props);

  useEffect(() => {
    props.getGames();
  }, []);

  // useEffect(() => {
  //   props.findGame();
  // }, []);
  const filteredGames = () => {
    return props.videoGames.games.games.slice(
      currentPage,
      currentPage + numTarjetas
    );
  };

  const nextPage = () => {
    setCurrenPage(currentPage + numTarjetas);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrenPage(currentPage - numTarjetas);
  };

  // console.log(filteredGames());
  return (
    <div className={style.general}>
      <h2>All Games</h2>
      <div className={style.divCards}>
        {filteredGames().map((g) => {
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
                  <button className={style.moreInfo}>More Info</button>
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
  console.log(state);
  return {
    videoGames: state
  };
};

export default connect(mapStateToProps, { getGames })(Card);
