// game.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../models/hero';
import { CoinService } from '../../services/coin/coin.service';

@Component({
  selector: 'game',
  templateUrl: './money.component.html',
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
  gameOver: boolean = false; // Додайте змінну, яка відслідковує, чи гра завершилася

  constructor(
    private heroService: HeroService,
    private coinService: CoinService // Внесення змін до імені сервісу: coinService
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
          this.collectCoins();
    }
  }

  collectCoins(): void {
    this.coinService.collectCoins(this.hero); // Передача героя та його кількості монет
  }

  closeModal(): void {
    this.gameOver = false; // Закриття модального вікна
  }
}
