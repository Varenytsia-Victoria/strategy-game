import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from '../../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroDecoratorService {
  constructor(private heroService: HeroService) {}

  addSkill(skill: string): void {
    this.heroService.getHero().subscribe((hero: Hero) => {
      if (!hero.skills.includes(skill)) {
        hero.skills.push(skill);
        console.log(`Added skill ${skill} to the hero`);
      } else {
        console.log(`Hero already has skill ${skill}`);
      }
    });
  }
}
