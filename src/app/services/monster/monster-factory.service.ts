// monster-factory.service.ts
import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster';
import { MonsterFlyweight } from '../../models/monster-flyweight.model';

@Injectable({
  providedIn: 'root',
})
export class MonsterFactoryService {
  private monsterFlyweights: { [key: string]: MonsterFlyweight } = {};

  constructor() {
    // Ініціалізуємо легковаговики монстрів
    this.monsterFlyweights['goblin'] = {
      name: 'Goblin',
      image: '../../../assets/images/monster.png',
      attack: 10,
      health: 30,
    };
    this.monsterFlyweights['orc'] = {
      name: 'Orc',
      image: '../../../assets/images/monster2.png',
      attack: 40,
      health: 20,
    };
    // Додайте інші легковаговики монстрів за потреби
  }

  createMonster(type: string, x: number, y: number): Monster {
    const flyweight = this.monsterFlyweights[type];
    if (!flyweight) {
      throw new Error(`Monster type "${type}" not found`);
    }
    return new Monster(
      flyweight,
      x,
      y,
      0, // Початкова швидкість може бути 0
      flyweight.health // Початкове здоров'я монстра з легковаговика
    );
  }
}
