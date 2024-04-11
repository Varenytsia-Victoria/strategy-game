import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private hero: Hero = { name: 'Hero', health: 100, attack: 10 };

  getHero(): Hero {
    return this.hero;
  }

  upgradeHealth(): void {
    this.hero.health += 10;
  }

  upgradeAttack(): void {
    this.hero.attack += 5;
  }
}
