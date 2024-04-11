import { Injectable } from '@angular/core';
import { Skill } from '../../models/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private skills: Skill[] = [];

  constructor() {}

  getSkillTree(): Skill[] {
    return this.skills;
  }

  // Add methods to manage skills, such as adding new skills, upgrading, etc.
}
