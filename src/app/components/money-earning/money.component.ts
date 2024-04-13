// game.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../models/hero';
import { Monster } from '../../models/monster/monster';
import { MonsterService } from '../../services/monster/monster.service';
//import { ShopService } from '../../services/shop/shop.service';

@Component({
  selector: 'money-game',
  templateUrl: 'money.component.html',
  styleUrls: ['./money.component.css'],
})
export class MoneyComponent implements OnInit {
  currentLevel: number;
  hero: Hero = {
    coins: 0,
    diamonds: 0,
    name: '',
    health: 100,
    attack: 10,
    x: 0,
    y: 0,
    skills: [],
  }; // Початкові значення для героя
  monsters: Monster[] = [];

  constructor(
    private heroService: HeroService,
    private monsterService: MonsterService
  ) // private shopService: ShopService // Додайте сервіс магазину тут
  {
    this.currentLevel = 1;
  }

  ngOnInit(): void {}
}