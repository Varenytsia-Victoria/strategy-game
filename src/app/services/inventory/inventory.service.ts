import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private inventory: Item[] = [];

  constructor() {}

  addItemToInventory(item: Item): void {
    this.inventory.push(item);
  }

  addItemFromShop(item: Item): void {
    this.inventory.push(item);
  }

  getInventory(): Item[] {
    return this.inventory;
  }
}
