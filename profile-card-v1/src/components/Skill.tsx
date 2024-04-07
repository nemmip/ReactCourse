import React from "react";
import SkillProps from "../types/SkillProps";

const Skill: React.FC<SkillProps> = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name} {props.icon}
    </div>
  );
};

export default Skill;
