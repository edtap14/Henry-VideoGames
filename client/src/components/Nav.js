import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Nav = () => {
  return (
    <Fragment>
      <div className={styles.navbarBox}>
        <ul>
          <li>
            <Link to="/">Re-Start</Link>
          </li>
          <li>
            <Link to="/searchgame">Search</Link>
          </li>
          <li>
            <Link to="/aboutus">AboutMe</Link>
          </li>
          <li>
            <Link to="/yourgame">YourGame</Link>
          </li>
          <li>
            <Link to="/filters">Filters</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Nav;
