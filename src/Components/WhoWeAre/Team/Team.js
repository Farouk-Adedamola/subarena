import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight, FaRegGrinStars } from "react-icons/fa";
import data from "./data";
import "./Team.css";
const Team = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="undercontainer">
        <div className="underline"></div>
      </div>
      <div className="title">
        <h2>Meat The Team</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <FaRegGrinStars className="grin" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <FaQuoteRight className="icon" />
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft className="right" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight className="right" />
        </button>
      </div>
    </section>
  );
};

export default Team;
