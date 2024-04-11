// monster.model.ts
export class Monster {
  x: number;
  y: number;
  speed: number;
  health: number;
  attack: number;

  constructor(
    x: number,
    y: number,
    speed: number,
    health: number,
    attack: number
  ) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.health = health;
    this.attack = attack;
  }
}
