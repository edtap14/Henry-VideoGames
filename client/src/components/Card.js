import React, { useEffect } from "react";
import { getGames } from "../actions";
import { connect } from "react-redux";
import Cards from "../components/Cards";

import style from "../styles/Card.module.css";

export const Card = (props) => {
  useEffect(() => {
    props.getGames();
  }, []);

  // console.log(props.videoGames.games.games.map((n) => n.name));

  return (
    <div className={style.general}>
      <h2>All Games</h2>

      <div className={style.divCards}>
        {props.videoGames.games.games.map((g) => {
          return (
            <div className={style.card}>
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
                      <span>{p.name}, </span>
                    ))}
                  </p>
                  <h3>Generos:</h3>
                  <p>
                    {g.genres.map((gen) => {
                      return <span>{gen.name}, </span>;
                    })}
                  </p>
                  <button className={style.moreInfo}>More Info</button>
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
  return {
    videoGames: state
  };
};

export default connect(mapStateToProps, { getGames })(Card);
