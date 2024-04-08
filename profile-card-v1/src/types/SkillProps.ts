export interface SkillProps {
  name: string;
  level: LevelEnum;
  color: string;
}
export enum LevelEnum {
  beginner = "👶",
  intermediate = "👍",
  advanced = "💪",
}
