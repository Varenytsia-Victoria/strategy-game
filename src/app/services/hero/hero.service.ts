// hero.service.ts
import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private hero: Hero = {
    coins: 100,
    diamonds: 5,
    name: 'Hero',
    health: 100,
    attack: 10,
    x: 30,
    y: 200,
    skills:[]
  };
  private heroSubject = new BehaviorSubject<Hero>(this.hero);

  getHero(): Observable<Hero> {
    return this.heroSubject.asObservable();
  }

  upgradeHealth(): void {
    this.hero.health += 10;
    this.heroSubject.next(this.hero);
  }

  upgradeAttack(): void {
    this.hero.attack += 5;
    this.heroSubject.next(this.hero);
  }

  moveUp(): void {
    this.hero.y -= 10;
    this.heroSubject.next(this.hero);
  }

  moveDown(): void {
    this.hero.y += 10;
    this.heroSubject.next(this.hero);
  }

  moveLeft(): void {
    this.hero.x -= 10;
    this.heroSubject.next(this.hero);
  }

  moveRight(): void {
    this.hero.x += 10;
    this.heroSubject.next(this.hero);
  }
}
