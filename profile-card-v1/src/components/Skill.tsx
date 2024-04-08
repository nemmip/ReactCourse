import React from "react";
import { SkillProps } from "../types/SkillProps";

const Skill: React.FC<SkillProps> = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.level}</span>
    </div>
  );
};

export default Skill;
