import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop/shop.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  items: Item[];
  playerX: number = 0; // Положення гравця по осі X
  playerY: number = 0; // Положення гравця по осі Y
  shopX: number = 100; // Положення магазину по осі X
  shopY: number = 100; // Положення магазину по осі Y
  isNearShop: boolean = false;

  constructor(private shopService: ShopService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = this.shopService.getShopItems();
  }

  buyItem(item: Item): void {
    this.shopService.buyItem(item);
  }

  
}
