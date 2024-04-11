import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root',
})
export class HeroDecoratorService {
  constructor(private heroService: HeroService) {}

  addAbility(ability: string): void {
    // Implement decorator logic to add abilities to the hero
  }
}
