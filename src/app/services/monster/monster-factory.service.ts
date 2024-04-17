// monster-factory.service.ts
import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster/monster';
import { MonsterFlyweight } from '../../models/monster/monster-flyweight.model';

@Injectable({
  providedIn: 'root',
})
export class MonsterFactoryService {
  private monsterFlyweights: { [key: string]: MonsterFlyweight } = {};

  constructor() {
    this.monsterFlyweights['skeleton'] = {
      name: 'Skeleton',
      image: '../../../assets/images/monster.png',
      attack: 10,
      health: 30,
    };
    this.monsterFlyweights['goblin'] = {
      name: 'Goblin',
      image: '../../../assets/images/monster_pink.png',
      attack: 40,
      health: 0,
    };
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
      0, 
      flyweight.health 
    );
  }
}
