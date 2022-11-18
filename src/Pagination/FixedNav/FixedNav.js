import React, { Fragment, useState, useEffect, useRef } from "react";
import { links } from "./NavData";
import { BiMenuAltRight, BiWindows } from "react-icons/bi";
import ManageConnect from "../../Assets/Logo/ManageConnect-removebg.png";
import classes from "./FixedNav.module.css";

const FixedNav = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [fix, setFix] = useState(false);

  // const buttonHandler = () => {
  //   setToggle(!toggle);
  //   document.getElementById("button").style.rotate = "45deg";
  // };

  useEffect(() => {
    if (toggle) {
      linksContainerRef.current.style.height = `${100}vh`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);

  return (
    <Fragment>
      <main className={classes.main}>
        <section className={classes.container}>
          <div className={classes.header}>
            <div className={fix ? classes.scroll : classes.fixed}>
              <img
                src={ManageConnect}
                alt="manageconnect"
                style={{ marginLeft: "1rem" }}
              />
              <button
                id="button"
                type="button"
                style={{ transition: "all .6s" }}
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? (
                  <BiMenuAltRight
                    style={{
                      rotate: "45deg",
                      transition: "all .6s",
                      color: "#222222",
                    }}
                  />
                ) : (
                  <BiMenuAltRight style={{ transition: "all .5s" }} />
                )}
              </button>
            </div>
            <div className={classes.article} ref={linksContainerRef}>
              <ul ref={linksRef}>
                {links.map((menu) => {
                  const { id, url, text, css, num } = menu;
                  return (
                    <li className={classes.menu} key={id}>
                      <a href={url} style={css}>
                        <span>{num}</span>
                        {text}
                      </a>
                      {/* <div className={classes.underline}></div> */}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default FixedNav;
