import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero';

@Injectable({
  providedIn: 'root',
})
export class GameSingletonService {
  private static instance: GameSingletonService;
  private hero: Hero;

  private constructor() {
    this.hero = { name: '', health: 0, attack: 0, x: 0, y: 0};
  }



  
  static getInstance(): GameSingletonService {
    if (!GameSingletonService.instance) {
      GameSingletonService.instance = new GameSingletonService();
    }
    return GameSingletonService.instance;
  }

  getHero(): Hero {
    return this.hero;
  }

  setHero(hero: Hero): void {
    this.hero = hero;
  }
}
