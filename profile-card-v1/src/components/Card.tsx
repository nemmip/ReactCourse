import React from "react";
import { LevelEnum, SkillProps } from "../types/SkillProps";
import Skill from "./Skill";

const Card: React.FC = () => {
  const skills: SkillProps[] = [
    { name: "Typescript", level: LevelEnum.advanced, color: "#79ea85" },
    { name: "Javascript", level: LevelEnum.advanced, color: "#b1e269" },
    { name: "NestJS", level: LevelEnum.advanced, color: "#2aa099" },
    { name: "NodeJS", level: LevelEnum.advanced, color: "#b12de7" },
    { name: "C#", level: LevelEnum.intermediate, color: "#347453" },
    { name: "Python", level: LevelEnum.advanced, color: "#a6c649" },
    { name: "Flask", level: LevelEnum.intermediate, color: "#9ff0f4" },
    { name: "REST API", level: LevelEnum.advanced, color: "#caf023" },
    { name: "GraphQL", level: LevelEnum.advanced, color: "#edb00c" },
    { name: "Microservices", level: LevelEnum.advanced, color: "#d8c050" },
    { name: "React", level: LevelEnum.intermediate, color: "#f25950" },
    { name: "Angular", level: LevelEnum.intermediate, color: "#e49b12" },
    { name: "MySQL", level: LevelEnum.advanced, color: "#02ad5f" },
    { name: "Cybersecurity", level: LevelEnum.beginner, color: "#427290" },
    { name: "SQL", level: LevelEnum.advanced, color: "#c2e5c8" },
    { name: "Git", level: LevelEnum.advanced, color: "#4a66ef" },
  ];
  return (
    <div className="card">
      <img className="avatar" src="Julia Ziębińska.jpeg" alt="avatar" />
      <div className="data">
        <h1>Julia Ziębińska</h1>
        <p>
          Software Engineer at Akamai and graduate of Computer Science at
          University of Economics in Katowice. In my free time I like to play
          video games, crocheting and going to the gym. Happy owner of two cats:
          Covid and Milka, horse Geronimo and labrador called Bagera.
        </p>
        <div className="skill-list">
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
