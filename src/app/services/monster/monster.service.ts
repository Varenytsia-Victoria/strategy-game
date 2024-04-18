import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster/monster';
import { MonsterFactoryService } from './monster-factory.service';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  private monsters: Monster[] = [];

  constructor(private monsterFactory: MonsterFactoryService) {
    this.spawnMonsters();
  }

  private spawnMonsters(): void {
    const spawnMonsterCommand = new SpawnMonsterCommand(this.monsterFactory);
    spawnMonsterCommand.execute();
    this.monsters = spawnMonsterCommand.getMonsters();
  }

  getMonsters(): Monster[] {
    return this.monsters;
  }
}

class SpawnMonsterCommand {
  private monsters: Monster[] = [];

  constructor(private monsterFactory: MonsterFactoryService) {}

  execute(): void {
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 1100 + 50;
      const y = Math.random() * 250 + 220;
      const monster = this.monsterFactory.createMonster('goblin', x, y);
      this.monsters.push(monster);
    }

    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 1100 + 50;
      const y = Math.random() * 250 + 210;
      const monster = this.monsterFactory.createMonster('skeleton', x, y);
      this.monsters.push(monster);
    }
  }

  getMonsters(): Monster[] {
    return this.monsters;
  }
}
