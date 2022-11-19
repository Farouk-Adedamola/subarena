import React, { Fragment } from "react";
import { certs } from "./data";
import classes from "./AboutCompany.module.css";
import tool from "../../Assets/Logo/tool.png";

const AboutCompany = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <section className={classes.section}>
          <div className={classes.wrapper}>
            <div className={classes.services}>
              <h1>about company</h1>
              <div className={classes.line}></div>
            </div>
            <div className={classes.what}>your partner for web innovations</div>
          </div>
          <p>
            Manage <span>Connect</span> is the partner of choice for many of the
            world’s leading enterprises, SMEs and technology challengers. We
            help businesses elevate their value through custom web solutions,
            product design, QA and consultancy services.
          </p>
          <div className={classes.container}>
            {certs.map((lists) => {
              const { id, text, paragraph, icon } = lists;
              return (
                <div key={id} className={classes.area}>
                  <div className={classes.contain}>
                    <p>{icon}</p>
                    <h2>{text}</h2>
                  </div>
                  <div className={classes.underline}></div>
                  <div className={classes.text}>{paragraph}</div>
                </div>
              );
            })}
          </div>
        </section>
        <section className={classes.tool}>
          <div className={classes.subtools}>
            <h2>
              We Create Fully Functional solutions So You Can Focus On Your
              Business
            </h2>
            <p>
              We are the development agency of choice, serving our customers
              what they deserve for a succeful business
            </p>
            <button type="button" className={classes.button}>
              <a href="/">Lets talk</a>
            </button>
          </div>
          <div className={classes.image}>
            <img src={tool} alt="tool" />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutCompany;
