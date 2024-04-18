import { Hero } from "src/app/models/hero";
import { Monster } from "src/app/models/monster/monster";

export interface GameStrategy {
  execute(): void;
}
// strategy.interface.ts
export interface BattleStrategy {
  execute(hero: Hero, monsters: Monster[]): void;
}
