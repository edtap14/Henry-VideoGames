import React from "react";
import style from "../styles/Landing.module.css";
import video from "../videos/mario.mp4";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.landing__container}>
      <video className={style.video_background} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <h1 className={style.text}> SearchGames</h1>
      <Link to="/home">
        <button className={style.button} type="submit">
          1P Start
        </button>
      </Link>
      <p className={style.pText}>Press start button</p>
    </div>
  );
};

export default Landing;
