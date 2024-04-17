// game.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../models/hero';
import { Monster } from '../../models/monster/monster';
import { MonsterService } from '../../services/monster/monster.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  currentLevel: number;
  hero: Hero = { coins:0, diamonds:0, name: '', health: 100, attack: 10, x: 0, y: 0, skills:[] }; 
  monsters: Monster[] = [];
  gameOver: boolean = false; 

  constructor(
    private heroService: HeroService,
    private monsterService: MonsterService,
  ) {
    this.currentLevel = 1;
  }

  ngOnInit(): void {
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
  }

  attack(): void {
    for (const monster of this.monsters) {
      if (this.isHeroCloseToMonster(monster)) {
        this.hero.health -= monster.attack;
        monster.health -= this.hero.attack;

        if (this.hero.health <= 0) {
          this.handleDefeat();
        }

        if (monster.health <= 0) {
          this.handleMonsterDefeat(monster);
        }
      }
    }
  }

  isHeroCloseToMonster(monster: Monster): boolean {
    const distance = Math.sqrt(
      Math.pow(this.hero.x - monster.x, 2) +
        Math.pow(this.hero.y - monster.y, 2)
    );
    return distance < 50; 
  }

  handleDefeat(): void {
    this.gameOver = true; 
    console.log('gameOver');
  }

  handleMonsterDefeat(monster: Monster): void {
    const index = this.monsters.indexOf(monster);
    if (index !== -1) {
      this.monsters.splice(index, 1); 
    }
  }

  closeModal(): void {
    this.gameOver = false; 
  }
}
