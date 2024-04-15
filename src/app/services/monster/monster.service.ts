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
    // Генеруємо 5 монстрів гоблінів та 5 монстрів орків
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 1100 + 50; // Випадкові координати в межах екрану
      const y = Math.random() * 250 + 220;
      // Створюємо монстра з використанням фабрики
      const monster = this.monsterFactory.createMonster('goblin', x, y); // Приклад використання типу 'goblin'
      this.monsters.push(monster);
    }

    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 1100+50; // Випадкові координати в межах екрану
      const y = Math.random() * 250 + 210;
      // Створюємо монстра з використанням фабрики
      const monster = this.monsterFactory.createMonster('skeleton', x, y); // Приклад використання типу 'orc'
      this.monsters.push(monster);
    }
  }

  getMonsters(): Monster[] {
    return this.monsters;
  }

  // Додайте методи для руху монстрів та їх атаки за потреби
}
