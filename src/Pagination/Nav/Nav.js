import React, { Fragment } from "react";
import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <Fragment>
      <section className={classes.sect}>
        <div className={classes.container}>
          {/* <div className={classes.innercontainer}> */}
          <ul>
            <li>
              <a href="/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
          </ul>
          {/* </div> */}
          <div className={classes.contact}>
            <div className={`${classes.mail} && ${classes.none}`}>
              <BsFillTelephoneFill className={classes.mailicon} />
              <p>+2349030666593</p>
            </div>
            <span></span>
            <div className={classes.mail}>
              <SiGmail className={classes.mailicon} />

              <p>hello@manageconnect.com</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Nav;
