// monster.service.ts
import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster';
import { MonsterFactoryService } from './monster-factory.service';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  private monsters: Monster[] = [];

  constructor(private monsterFactory: MonsterFactoryService) {
    // Генеруємо 5 монстрів гоблінів та 5 монстрів орків
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 900; // Випадкові координати в межах екрану
      const y = Math.random() * 400 + 200;
      const speed = Math.random() * 5; // Випадкова швидкість руху
      const health = Math.random() * 50 + 50; // Випадкове здоров'я від 50 до 100
      const attack = Math.random() * 10 + 5; // Випадкова атака від 5 до 15
      // Створюємо монстра з використанням фабрики
      const monster = this.monsterFactory.createMonster('goblin', x, y); // Приклад використання типу 'goblin'
      this.monsters.push(monster);
    }

    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 900; // Випадкові координати в межах екрану
      const y = Math.random() * 400 + 200;
      const speed = Math.random() * 5; // Випадкова швидкість руху
      const health = Math.random() * 50 + 50; // Випадкове здоров'я від 50 до 100
      const attack = Math.random() * 10 + 5; // Випадкова атака від 5 до 15
      // Створюємо монстра з використанням фабрики
      const monster = this.monsterFactory.createMonster('orc', x, y); // Приклад використання типу 'orc'
      this.monsters.push(monster);
    }
  }

  getMonsters(): Monster[] {
    return this.monsters;
  }

  // Додайте методи для руху монстрів та їх атаки за потреби
}
