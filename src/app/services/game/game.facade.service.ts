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
    this.showWelcomeModal();

    this.levelService.start();
    this.heroService.getHero().subscribe((hero) => {
      this.singletonService.setHero(hero);
    });
  }

  endGame(): void {
    
  }

  private showWelcomeModal(): void {
    const welcomeModal = document.getElementById('welcomeModal');
    if (welcomeModal) {
      welcomeModal.style.display = 'block';
    }
  }

  closeModal(): void {
    const welcomeModal = document.getElementById('welcomeModal');
    if (welcomeModal) {
      welcomeModal.style.display = 'none';
    }
  }
}
