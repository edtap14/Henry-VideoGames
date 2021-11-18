import React from "react";
import style from "../styles/Landing.module.css";
import video from "../videos/mario.mp4";

const Landing = () => {
  const onClickStart = (e) => {
    e.preventDefault();
    window.location.href = "/home";
  };
  return (
    <div className={style.landing__container}>
      <video className={style.video_background} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <h1 className={style.text}> SearchGames</h1>
      <button className={style.button} type="submit" onClick={onClickStart}>
        1P Start
      </button>
      <p className={style.pText}>Press start button</p>
    </div>
  );
};

export default Landing;
