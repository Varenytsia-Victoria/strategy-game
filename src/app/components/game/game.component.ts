// game.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../models/hero';
import { Monster } from '../../models/monster/monster';
import { MonsterService } from '../../services/monster/monster.service';
//import { ShopService } from '../../services/shop/shop.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  currentLevel: number;
  hero: Hero = { coins:0, diamonds:0, name: '', health: 100, attack: 10, x: 0, y: 0, skills:[] }; // Початкові значення для героя
  monsters: Monster[] = [];
  gameOver: boolean = false; // Додайте змінну, яка відслідковує, чи гра завершилася

  constructor(
    private heroService: HeroService,
    private monsterService: MonsterService,
   // private shopService: ShopService // Додайте сервіс магазину тут
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
      // Перевірте, чи гра не завершилася
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

      // Перевірте, чи гравець наближається до магазину
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
    // Перевірка за відстанню між героєм і монстром
    const distance = Math.sqrt(
      Math.pow(this.hero.x - monster.x, 2) +
        Math.pow(this.hero.y - monster.y, 2)
    );
    return distance < 50; // Припустимо, що монстр атакує, якщо відстань між ним і героєм менше 50
  }

  handleDefeat(): void {
    // Дії, які відбуваються при поразці героя
    this.gameOver = true; // Встановлюємо gameOver в true
    console.log('gameOver');
  }

  handleMonsterDefeat(monster: Monster): void {
    // Дії, які відбуваються при поразці монстра
    const index = this.monsters.indexOf(monster);
    if (index !== -1) {
      this.monsters.splice(index, 1); // Видалення монстра зі списку
    }
  }

  closeModal(): void {
    this.gameOver = false; // Закриття модального вікна
  }
}
