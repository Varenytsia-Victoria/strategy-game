import { Injectable } from '@angular/core';
import { Item } from '../../models/item';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private shopItems: Item[] = [];

  constructor() {}

  getShopItems(): Item[] {
    return this.shopItems;
  }

  buyItem(item: Item): void {
    // Implement logic for buying items from the shop
  }
}
