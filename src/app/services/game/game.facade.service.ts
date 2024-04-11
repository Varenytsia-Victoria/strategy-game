import { Injectable } from '@angular/core';
import { LevelService } from '../level/level.service';
import { HeroService } from '../hero/hero.service';
import { GameSingletonService } from '../hero/game.singleton.service';

@Injectable({
  providedIn: 'root',
})
export class GameFacadeService {
  constructor(
    private levelService: LevelService,
    private heroService: HeroService,
    private singletonService: GameSingletonService
  ) {}

  startGame(): void {
    this.levelService.start();
    this.heroService.getHero().subscribe((hero) => {
      this.singletonService.setHero(hero);
    });
  }

  // Add more facade methods as needed to interact with other game services
}
