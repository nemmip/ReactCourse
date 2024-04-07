import React from "react";
import SkillProps from "../types/SkillProps";
import Skill from "./Skill";

const Card: React.FC = () => {
  const skills: SkillProps[] = [
    { name: "Typescript", icon: "💪", color: "#79ea85" },
    { name: "Javascript", icon: "💪", color: "#b1e269" },
    { name: "NestJS", icon: "💪", color: "#2aa099" },
    { name: "NodeJS", icon: "💪", color: "#b12de7" },
    { name: "C#", icon: "👍", color: "#347453" },
    { name: "Python", icon: "💪", color: "#a6c649" },
    { name: "Flask", icon: "👍", color: "#9ff0f4" },
    { name: "REST API", icon: "💪", color: "#caf023" },
    { name: "GraphQL", icon: "💪", color: "#edb00c" },
    { name: "Microservices", icon: "💪", color: "#d8c050" },
    { name: "React", icon: "👍", color: "#f25950" },
    { name: "Angular", icon: "👍", color: "#e49b12" },
    { name: "MySQL", icon: "💪", color: "#02ad5f" },
    { name: "Cybersecurity", icon: "👶", color: "#427290" },
    { name: "SQL", icon: "💪", color: "#c2e5c8" },
    { name: "Git", icon: "💪", color: "#4a66ef" },
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
            <Skill {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
