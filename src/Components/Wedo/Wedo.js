import React, { Fragment } from "react";
import { list } from "./data";
import classes from "./wedo.module.css";
const Wedo = () => {
  return (
    <Fragment>
      <div>
        {list.map((service) => {
          const { id, tag, name, text, css } = service;
          return (
            <div style={css} key={id} className={classes.container}>
              <h1>
                <span>{tag}</span>
              </h1>
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
