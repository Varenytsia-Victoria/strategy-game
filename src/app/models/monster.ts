import { MonsterFlyweight } from './monster-flyweight.model';

export class Monster {
  constructor(
    private flyweight: MonsterFlyweight,
    public x: number,
    public y: number,
    public health: number, // Додайте властивість 'health'
    public attack: number,
  ) {}

  getName(): string {
    return this.flyweight.name;
  }

  getImage(): string {
    return this.flyweight.image;
  }

  getAttack(): number {
    return this.flyweight.attack;
  }

  getHealth(): number {
    return this.flyweight.health;
  }
}
