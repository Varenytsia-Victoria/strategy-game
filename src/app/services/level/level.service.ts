import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private currentLevel: number = 1;

  constructor() {}

  getCurrentLevel(): number {
    return this.currentLevel;
  }

  upgradeLevel(): void {
    this.currentLevel++;
  }

  start(): void {
  }
}
