import React, { Fragment } from "react";
import { list } from "./data";
import classes from "./wedo.module.css";
const Wedo = () => {
  return (
    <Fragment>
      <div>
        <div className={classes.wrapper}>
          <div className={classes.services}>
            <h1>services</h1>
            <div className={classes.line}></div>
          </div>
          <div className={classes.what}>our services</div>
        </div>
        {list.map((service) => {
          const { id, tag, name, text, css, work } = service;
          return (
            <div style={css} key={id} className={classes.container}>
              <h1>
                <span>{tag}</span>
              </h1>
              <h4>{work}</h4>
              <p>{name}</p>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Wedo;
