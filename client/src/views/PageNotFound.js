import React from "react";
import style from "../styles/Landing.module.css";
import video from "../videos/gameOver.mp4";

const PageNotFound = () => {
  return (
    <div>
      <video className={style.video_background} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default PageNotFound;
