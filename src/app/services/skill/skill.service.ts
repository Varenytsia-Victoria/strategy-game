import { Injectable } from '@angular/core';
import { Skill } from '../../models/skill/skill';
import { Hero } from '../../models/hero';
import { HeroService } from '../hero/hero.service';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private skills: Skill[] = [
    { name: 'Fireball', description: 'Launches a fiery projectile', level: 1 },
    { name: 'Healing', description: 'Restores health to the hero', level: 1 },
    {
      name: 'Teleportation',
      description: 'Allows the hero to teleport short distances',
      level: 1,
    },
  ];

  constructor(private heroService: HeroService) {}

  getSkillTree(): Skill[] {
    return this.skills;
  }

  buySkill(skill: Skill, hero: Hero): void {
    // Check if the hero has enough diamonds to buy the skill
    if (hero.diamonds > 0) {
      // Check if the skill level is less than 5
      if (skill.level < 5) {
        // Increase the skill level and decrease the hero's diamonds count
        skill.level++;
        hero.diamonds--;
        console.log(`Skill ${skill.name} purchased. New level: ${skill.level}`);
      } else {
        alert(`Skill ${skill.name} is already at max level`);
      }
    } else {
      alert(`You don't have enough diamonds`);
    }
  }

  upgradeSkill(skill: Skill): void {
    // Implement logic for upgrading a skill
    console.log(`Upgraded skill: ${skill.name}`);
  }
}
