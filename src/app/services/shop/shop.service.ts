import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { InventoryService } from '../inventory/inventory.service';
import { Hero } from '../../models/hero';
import { HeroService } from '../hero/hero.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private shopX: number = 100;
  private shopY: number = 100;
  private shopItems: Item[] = [
    {
      name: 'Sword',
      price: 50,
      image: '../../../../../assets/images/commonSword.png ',
      attack: 30,
      health: 0,
    },
    {
      name: 'Health Potion',
      price: 20,
      image: '../../../../../assets/images/potion1.png ',
      attack: 0,
      health: 50,
    },
    {
      name: 'Magic Staff',
      price: 100,
      image: '../../../../../assets/images/magicSword.png',
      attack: 70,
      health: 0,
    },
  ];

  constructor(
    private inventoryService: InventoryService,
    private heroService: HeroService // Додайте сервіс героя
  ) {}

  buyItem(item: Item, hero: Hero): void {
    if (this.hasEnoughMoney(hero.coins, item.price)) {
      this.inventoryService.addItemFromShop(item);
      const index = this.shopItems.indexOf(item);
      if (index !== -1) {
        this.shopItems.splice(index, 1);
      }
      hero.coins -= item.price; 
      hero.health += item.health;
      hero.attack += item.attack;
    } else {
      alert(`You don't have enough money to buy ${item.name}!`);
    }
  }

  private hasEnoughMoney(coins: number, price: number): boolean {
    return coins >= price;
  }

  getShopItems(): Item[] {
    return this.shopItems;
  }
}
