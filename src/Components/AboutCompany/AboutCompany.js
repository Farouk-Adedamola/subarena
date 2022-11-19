import React, { Fragment } from "react";
import { certs } from "./data";
import classes from "./AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.wrapper}>
          <div className={classes.services}>
            <h1>about company</h1>
            <div className={classes.line}></div>
          </div>
          <div className={classes.what}>your partner for web innovations</div>
        </div>
        <p>
          manage <span>connect</span> is the partner of choice for many of the
          world’s leading enterprises, SMEs and technology challengers. We help
          businesses elevate their value through custom software development,
          product design, QA and consultancy services.
        </p>
        <div className={classes.container}>
          {certs.map((lists) => {
            const { id, text, paragraph, icon } = lists;
            return (
              <div key={id} className={classes.area}>
                <p>{icon}</p>
                <div className={classes.contain}>
                  <h2>{text}</h2>
                  <div className={classes.underline}></div>
                </div>
                <div className={classes.text}>{paragraph}</div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default AboutCompany;
