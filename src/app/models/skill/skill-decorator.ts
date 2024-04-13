import { Skill } from './skill';

export interface SkillDecorator {
  addSkill(skill: Skill): void;
}
