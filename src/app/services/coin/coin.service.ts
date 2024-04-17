import { Injectable } from '@angular/core';
import { GoldCoin } from './../coin/gold-coin.service';
import { Diamond } from './../coin/diamond.service';
import { Coin } from '../../models/coin';
import { Hero } from '../../models/hero';
import { HeroService } from '.././hero/hero.service';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  coins: Coin[] = []; 

  constructor(private heroService: HeroService) {}

  getCoins(): Coin[] {
    return this.coins;
  }

  generateCoins(numCoins: number): Coin[] {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const coins: Coin[] = [];

    for (let i = 0; i < numCoins; i++) {
      const randomX = Math.random() * (screenWidth - 100) + 50;
      const randomY = Math.random() * (screenHeight - 100) + 50;

      const coin =
        Math.random() > 0.5
          ? new GoldCoin(randomX, randomY)
          : new Diamond(randomX, randomY);

      coins.push(coin);
    }

    this.coins = coins; 

    return coins;
  }

  collectCoins(heroX: number, heroY: number, hero: Hero): void {
    const playerX = heroX;
    const playerY = heroY;

    for (let i = 0; i < this.coins.length; i++) {
      const coin = this.coins[i];
      const distance = Math.sqrt(
        Math.pow(playerX - coin.x, 2) + Math.pow(playerY - coin.y, 2)
      );

      if (distance < 50) {
        if (coin.type === 'diamond') {
          hero.diamonds++;
          this.breakDiamond(coin as Diamond);
        } else if (coin.type === 'gold') {
          hero.coins += 20;
          this.breakCoin(coin as GoldCoin);

        }

        this.coins.splice(i, 1); 
        i--;
      }
    }
  }

  breakDiamond(diamond: Diamond): void {
    diamond.destroy();

    const DiamondImage = new Image();
    DiamondImage.src = '../../../assets/images/diamond.png'; 
    DiamondImage.style.position = 'absolute';
    DiamondImage.style.left = diamond.x + 20 + 'px';
    DiamondImage.style.top = diamond.y + 'px';

    document.body.appendChild(DiamondImage);

    setTimeout(() => {
      DiamondImage.remove();
    }, 1000); 
  }

  breakCoin(coin: GoldCoin): void {
    coin.destroy();

    const CoinImage = new Image();
    CoinImage.src = '../../../assets/images/coin.png'; 
    CoinImage.style.position = 'absolute';
    CoinImage.style.left = coin.x + 20 + 'px';
    CoinImage.style.top = coin.y + 'px';

    document.body.appendChild(CoinImage);

    setTimeout(() => {
      CoinImage.remove();
    }, 1000); 
  }
}
