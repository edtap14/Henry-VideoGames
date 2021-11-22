import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { detailGame } from "../actions";
import { connect } from "react-redux";
import style from "../styles/GameDetails.module.css";
import { Link } from "react-router-dom";

const GameDitails = (props) => {
  const id = props.match.params.id;

  useEffect(() => {
    props.detailGame(id);
  }, [id]);
  const g = props.gamesDet.dgames.detail;
  console.log(g);

  return (
    <div>
      <Nav />
      <div className={style.firstDiv}>
        <div className={style.gameBox}>
          <div className={style.divName}>
            <h3 className={style.name}>GAME : {g.name}</h3>
          </div>
          <img
            className={style.image}
            src={g.background_image}
            alt={g.name}
          ></img>
          <div className={style.data}>
            <p className={style.title}>Description:</p>
            <p className={style.text}>{g.description}</p>
            <p className={style.title}>Rating:</p>
            <p className={style.text}>{g.rating}</p>
            <p className={style.title}>Released:</p>
            <p className={style.text}>{g.released}</p>
            {/* <p>Platforms:</p>
        <p>
        {g.platforms.map((p) => (
          <span>{p.name}, </span>
          ))}
          </p>
          <p>Genres:</p>
        <p></p> */}
            <p className={style.title}>More Info:</p>
            <a target="_blank" href={g.website} className={style.link}>
              {g.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    gamesDet: state
  };
};

export default connect(mapStateToProps, { detailGame })(GameDitails);
