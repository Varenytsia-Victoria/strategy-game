// coin-collect.strategy.ts
import { Injectable } from '@angular/core';
import { CoinService } from '../../services/coin/coin.service';
import { Hero } from '../../models/hero';
import { GameStrategy } from './strategy.interface';

@Injectable({
  providedIn: 'root',
})
export class CoinCollectStrategy implements GameStrategy {
  constructor(private coinService: CoinService) {}

  execute(): void {
    const hero: Hero = {
      coins: 0,
      diamonds: 0,
      name: '',
      health: 100,
      attack: 10,
      x: 0,
      y: 0,
      skills: [],
    };
    this.coinService.collectCoins(hero.x, hero.y, hero);
  }
}
