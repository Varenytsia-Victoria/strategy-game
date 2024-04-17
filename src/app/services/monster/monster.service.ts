// monster.service.ts
import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster/monster';
import { MonsterFactoryService } from './monster-factory.service';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  private monsters: Monster[] = [];

  constructor(private monsterFactory: MonsterFactoryService) {
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 1100 + 50; 
      const y = Math.random() * 250 + 220;
      const monster = this.monsterFactory.createMonster('goblin', x, y); 
      this.monsters.push(monster);
    }

    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 1100+50; 
      const y = Math.random() * 250 + 210;
      const monster = this.monsterFactory.createMonster('skeleton', x, y); 
      this.monsters.push(monster);
    }
  }

  getMonsters(): Monster[] {
    return this.monsters;
  }

}
