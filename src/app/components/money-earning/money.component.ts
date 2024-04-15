// game.component.ts
/*import { Component, HostListener, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../models/hero';
import { Monster } from '../../models/monster/monster';
@Component({
  selector: 'game',
  templateUrl: 'money.component.html',
  styleUrls: ['./money.component.css'],
})
export class MoneyComponent implements OnInit {
  currentLevel: number;
  hero: Hero = {
    coins: 0,
    diamonds: 0,
    name: '',
    health: 100,
    attack: 10,
    x: 0,
    y: 0,
    skills: [],
  }; // Початкові значення для героя
  monsters: Monster[] = [];

  constructor(
    private heroService: HeroService // private shopService: ShopService // Додайте сервіс магазину тут
  ) {
    this.currentLevel = 1;
  }

  ngOnInit(): void {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
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
    }
  }
}

*/

// game.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../models/hero';


@Component({
  selector: 'game',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css'],
})
export class MoneyComponent implements OnInit {
  currentLevel: number;
  hero: Hero = { coins:0, diamonds:0, name: '', health: 100, attack: 10, x: 0, y: 0, skills:[] }; // Початкові значення для героя
  gameOver: boolean = false; // Додайте змінну, яка відслідковує, чи гра завершилася

  constructor(
    private heroService: HeroService,
   // private shopService: ShopService // Додайте сервіс магазину тут
  ) {
    this.currentLevel = 1;
  }

  ngOnInit(): void {
    this.heroService.getHero().subscribe((hero: Hero) => {
      this.hero = hero;
    });

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
        
      }

    }
  }


  

 
  closeModal(): void {
    this.gameOver = false; // Закриття модального вікна
  }
}
