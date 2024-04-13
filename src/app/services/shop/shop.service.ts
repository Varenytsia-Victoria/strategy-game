import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { InventoryService } from '../inventory/inventory.service'; // Імпорт сервісу інвентарю

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private shopX: number = 100;
  private shopY: number = 100;
  private shopItems: Item[] = [
    { name: 'Sword', price: 50 },
    { name: 'Potion', price: 20 },
    { name: 'Magic Staff', price: 100 },
  ];

  constructor(private inventoryService: InventoryService) {} // Видаліть конструктор

  // Попередній код isPlayerNearShop та openShopModal зберігається

  buyItem(item: Item): void {
    // Перевірка чи є достатньо коштів у гравця для покупки
    if (this.hasEnoughMoney(item.price)) {
      // Додавання товару до інвентарю
      this.inventoryService.addItemToInventory(item);
      // Видалення товару з магазину
      const index = this.shopItems.indexOf(item);
      if (index !== -1) {
        this.shopItems.splice(index, 1);
      }
      // Вивід повідомлення про успішну покупку (можна видалити після тестування)
      console.log(`You bought ${item.name}!`);
    } else {
      // Вивід повідомлення про недостатню кількість коштів (можна видалити після тестування)
      console.log(`You don't have enough money to buy ${item.name}!`);
    }
  }

  private hasEnoughMoney(price: number): boolean {
    // Перевірка чи є достатньо коштів у гравця для покупки товару
    // Цю логіку ви можете реалізувати за вашими потребами
    return true; // Покищо повертаємо завжди true для тестування
  }

  getShopItems(): Item[] {
    return this.shopItems;
  }
}
