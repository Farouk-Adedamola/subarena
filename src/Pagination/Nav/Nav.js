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
import FixedNav from "../FixedNav/FixedNav";

const Nav = () => {
  return (
    <Fragment>
      <main className={classes.main}>
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
                <span></span>
                <p>+2349030666593</p>
              </div>
              <div className={classes.mail}>
                <SiGmail className={classes.mailicon} />
                <span></span>

                <p>hello@manageconnect.com</p>
              </div>
            </div>
          </div>
        </section>
          <FixedNav />
      </main>
    </Fragment>
  );
};

export default Nav;
