import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoinService } from '../../../services/coin/coin.service';
import { HeroService } from '../../../services/hero/hero.service';
import { Hero } from '../../../models/hero';
import { Subscription } from 'rxjs';
import { Coin } from 'src/app/models/coin';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
})
export class CoinsComponent implements OnInit, OnDestroy {
  coins: Coin[] = [];
  hero!: Hero;

  private heroSubscription!: Subscription;

  constructor(
    private сoinService: CoinService,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.heroSubscription = this.heroService
      .getHero()
      .subscribe((hero: Hero) => {
        this.hero = hero;
        // Перевірка, чи монети ще не створені
        if (this.coins.length === 0) {
          this.generateCoins();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.heroSubscription) {
      this.heroSubscription.unsubscribe();
    }
  }

  generateCoins(): void {
    this.coins = this.сoinService.generateCoins(10);
  }

  collectCoins(): void {
    this.сoinService.collectCoins(this.hero); // Збираємо монети
    this.coins = this.сoinService.getCoins(); // Оновлюємо список монет після збору
  }
}
