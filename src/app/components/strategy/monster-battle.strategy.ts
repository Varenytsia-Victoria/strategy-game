// monster-battle.strategy.ts
import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster/monster';
import { Hero } from '../../models/hero';
import { BattleStrategy } from './strategy.interface';

@Injectable({
  providedIn: 'root',
})
export class MonsterBattleStrategy implements BattleStrategy {
  constructor() {}

  execute(hero: Hero, monsters: Monster[]): void {
    for (const monster of monsters) {
      if (this.isHeroCloseToMonster(hero, monster)) {
        hero.health -= monster.attack;
        monster.health -= hero.attack;

        if (hero.health <= 0) {
          this.handleDefeat();
          return; // Зупиняємо бійку, якщо гравець програв
        }

        if (monster.health <= 0) {
          this.handleMonsterDefeat(monster, monsters);
        }
      }
    }
  }

  isHeroCloseToMonster(hero: Hero, monster: Monster): boolean {
    const distance = Math.sqrt(
      Math.pow(hero.x - monster.x, 2) + Math.pow(hero.y - monster.y, 2)
    );
    return distance < 50;
  }

  handleDefeat(): void {
    console.log('Game Over');
  }

  handleMonsterDefeat(monster: Monster, monsters: Monster[]): void {
    const index = monsters.indexOf(monster);
    if (index !== -1) {
      monsters.splice(index, 1);
    }
  }
}
