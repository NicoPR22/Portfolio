import React from "react";
import "./About.css";
import ME from "../../assets/IMG_20211220_190800_074.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import Quotes from "./Quotes/Quotes";
import Player from "./player/Player";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiDoubleQuotesL className="about__icon" />
              <h5>Where I Found Motivation</h5>
              <Quotes/>
            </article>
            {/*
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <Player/>
            </article>
             */}
          </div>
          <p>
            {" "}
            Hi! I'm Nicolás, I'm a recent graduate as Full Stack developer.
            Passionate about technology and in love with programing since a
            discover it at school, driven by music and sport, the other things
            that takes big part of my life.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
