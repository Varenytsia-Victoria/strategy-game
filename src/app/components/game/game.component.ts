
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../models/hero';
import { Monster } from '../../models/monster/monster';
import { MonsterService } from '../../services/monster/monster.service';
import { MonsterBattleStrategy } from '../../components/strategy/monster-battle.strategy';
import { BattleStrategy } from '../strategy/strategy.interface';

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css'],
})
export class GameComponent implements OnInit {
  currentLevel: number;
  hero: Hero = {
    coins: 0,
    diamonds: 0,
    name: '',
    health: 0,
    attack: 0,
    x: 0,
    y: 0,
    skills: [],
  };
  monsters: Monster[] = [];
  gameOver: boolean = false; 
  welcome: boolean = true;
  showLevelUpModal: boolean = false;

  constructor(
    private heroService: HeroService,
    private monsterService: MonsterService,
    private battleStrategy: MonsterBattleStrategy
  ) {
    this.currentLevel = 1;
  }

  ngOnInit(): void {
    this.battleStrategy.gameOver.subscribe((gameOver: boolean) => {
      if (gameOver) {
        this.gameOver = true;
      }
    });

    this.heroService.getHero().subscribe((hero: Hero) => {
      this.hero = hero;
    });
    this.monsters = this.monsterService.getMonsters();
  }

  upgradeHealth(): void {
    this.heroService.upgradeHealth();
  }

  upgradeAttack(): void {
    this.heroService.upgradeAttack();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.gameOver) {
      switch (event.key) {
        case 'w':
          this.heroService.moveUp();
          break;
        case 's':
          this.heroService.moveDown();
          break;
        case 'a':
          this.heroService.moveLeft();
          break;
        case 'd':
          this.heroService.moveRight();
          break;
        case ' ':
          this.attack();
          break;
      }
    }
    if (event.key === 'q') {
      this.closeWelcomeModal();
      this.closeLevelUpModal();
    }
  }

  attack(): void {
    this.battleStrategy.execute(this.hero, this.monsters);

    if (this.monsters.length === 0) {
      this.levelUp();
    }
  }

  closeModal(): void {
    this.gameOver = false;
  }

  closeWelcomeModal(): void {
    this.welcome = false;
  }

  levelUp(): void {
    this.currentLevel++;
    this.showLevelUpModal = true;
    this.monsters = this.monsterService.getMonsters();
  }

  closeLevelUpModal(): void {
    this.showLevelUpModal = false;
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'q') {
      this.closeWelcomeModal();
    }
  }
}
