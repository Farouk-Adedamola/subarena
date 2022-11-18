import React, { Fragment } from "react";
import classes from "./Area.module.css";
import TypewriterComponent from "typewriter-effect";
const Area = () => {
  return (
    <Fragment>
      <div className={classes.area}>
        <div className={classes.main}>
          <TypewriterComponent
            className={classes.typewriter}
            // react typewriter using options
            options={{
              strings: [
                "Managed IT Services You Can Trust",
                "From idea to product",
                "End to End Development",
              ],
              delay: 100,
              deleteSpeed: 150,
              autoStart: true,
              loop: true,
            }}
            // react typewriter using methods
            onInit={(typewriter) => {
              typewriter
                .typeString("Managed IT Services You Can Trust")
                .pauseFor(2000)
                .deleteAll()
                .pauseFor(1000)
                .typeString("From idea to product")
                .pauseFor(2000)
                .deleteAll()
                .pauseFor(2000)
                .typeString("End to End Development")

                .start();
            }}
          />
        </div>
        <button className={classes.button}>
          <a href="/">Learn more</a>
        </button>
      </div>
    </Fragment>
  );
};

export default Area;
