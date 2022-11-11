import React from "react";
import classes from "./header.module.css";
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.manage}>
          <h4>manage</h4>
        </div>
        <div className={classes.logo}>
          <div>
            <h1>VTU</h1>
          </div>
          <div className={classes.subLogo}>
            <p>portal</p>
            <p>packages</p>
          </div>
        </div>
      </div>
      <AiOutlineBars className={classes.icon} />
    </header>
  );
};

export default Header;
