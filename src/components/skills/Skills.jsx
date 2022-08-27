import React from "react";
import "./Skills.css";
import { DiReact } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { DiNodejsSmall } from "react-icons/di"
import { SiRedux } from "react-icons/si"
import { DiDatabase } from "react-icons/di"

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
      
        <div className="experience__content">
          <article className="experience__details">
            <div>
            <DiJavascript1 className="experience__details-icon" />
              <h4>JavaScript</h4>
            </div>
          </article>
          <article className="experience__details">
            <div>
            <DiHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </div>
          </article>
          <article className="experience__details">
            <div>
            <DiCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </div>
          </article>
          <article className="experience__details">
            <div>
            <DiNodejsSmall className="experience__details-icon" />
              <h4>Node</h4>
            </div>
          </article>
          <article className="experience__details">
            <div>
            <DiReact className="experience__details-icon" />
              <h4>React</h4>
            </div>
          </article>
          <article className="experience__details">
            <div>
            <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </div>
          </article>
          <article className="experience__details">
            <div>
            <DiDatabase className="experience__details-icon" />
              <h4>SQL</h4>
            </div>
          </article>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
