import React, { Fragment } from "react";
import classes from "./about.module.css";
import { qualities } from "./data";
import Team from "./Team/Team";

const About = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div>
          <div className={classes.wrapper}>
            <div className={classes.services}>
              <h1>About us</h1>
              <div className={classes.line}></div>
            </div>
            <div className={classes.what}>who we are</div>
            <p>
              we build websites that are not only visually beautiful, but also
              functionally effective. Our team of web strategists, designers,
              developers, and project managers work together to help clients
              meet their business objectives.
            </p>
          </div>
        </div>
        <div className={classes.view}>
          {qualities.map((list) => {
            const { id, name, text, tag } = list;
            return (
              <div key={id} className={classes.section}>
                <p>{tag}</p>
                <div className={classes.wrap}>
                  <h4>{name}</h4>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Team />
    </Fragment>
  );
};

export default About;
