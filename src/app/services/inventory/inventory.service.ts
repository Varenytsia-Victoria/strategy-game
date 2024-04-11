import { Injectable } from '@angular/core';
import { Item } from '../../models/item';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private inventory: Item[] = [];

  constructor() {}

  getInventory(): Item[] {
    return this.inventory;
  }

  addItem(item: Item): void {
    this.inventory.push(item);
  }

  removeItem(item: Item): void {
    const index = this.inventory.findIndex((i) => i === item);
    if (index !== -1) {
      this.inventory.splice(index, 1);
    }
  }
}
