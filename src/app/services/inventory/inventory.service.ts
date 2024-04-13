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

  addItemToInventory(item: Item): void {
    this.inventory.push(item);
  }
}
