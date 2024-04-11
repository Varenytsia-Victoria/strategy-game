import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { LevelService } from '../../services/level/level.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  currentLevel: number;
  hero: Hero = { name: '', health: 0, attack: 0 };

  constructor(
    private heroService: HeroService,
    private levelService: LevelService
  ) {
    this.currentLevel = 1;
  }

  ngOnInit(): void {
    this.currentLevel = this.levelService.getCurrentLevel();
    this.hero = this.heroService.getHero();
  }

  upgradeLevel(): void {
    this.levelService.upgradeLevel();
    this.currentLevel = this.levelService.getCurrentLevel();
  }
}
