import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill/skill.service';
import { Skill } from '../../models/skill/skill';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.css'],
})
export class SkillTreeComponent implements OnInit {
  skills: Skill[];
  hero: Hero;

  constructor(
    private skillService: SkillService,
    private heroService: HeroService
  ) {
    this.skills = [];
    this.hero = {
      coins: 0,
      diamonds: 0,
      name: '',
      health: 0,
      attack: 0,
      x: 0,
      y: 0,

      skills: []
    }; // Initialize the hero object
  }

  ngOnInit(): void {
    this.heroService.getHero().subscribe((hero: Hero) => {
      this.hero = hero;
    });
    this.updateSkillTree();
  }

  updateSkillTree(): void {
    this.skills = this.skillService.getSkillTree();
  }

  buySkill(skill: Skill): void {
    this.skillService.buySkill(skill, this.hero); // Pass the hero object correctly
    // Update the display of skills after purchase
    this.updateSkillTree();
  }

  upgradeSkill(skill: Skill): void {
    this.skillService.upgradeSkill(skill);
    // Update the display of skills after upgrade
    this.updateSkillTree();
  }
}
