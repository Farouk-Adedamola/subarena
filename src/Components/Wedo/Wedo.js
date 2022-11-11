import React, { Fragment } from "react";
import { list } from "./data";
const Wedo = () => {
  return (
    <Fragment>
      <div>
        {list.map((service) => {
          const { id, tag, name, text, css } = service;
          return (
            <div style={css} key={id}>
              <p>{tag}</p>
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
