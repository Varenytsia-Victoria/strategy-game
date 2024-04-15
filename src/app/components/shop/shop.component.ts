import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop/shop.service';
import { Item } from '../../models/item';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  items: Item[];
  hero: Hero; // Додайте змінну для збереження об'єкта героя

  constructor(
    private shopService: ShopService,
    private heroService: HeroService // Додайте HeroService до конструктора
  ) {
    this.items = [];
    this.hero = {
      coins: 0,
      diamonds: 0,
      name: '',
      health: 0,
      attack: 0,
      x: 0,
      y: 0,
      skills: [],
    }; // Ініціалізуйте об'єкт героя
  }

  ngOnInit(): void {
    this.items = this.shopService.getShopItems();
    this.heroService.getHero().subscribe((hero) => {
      this.hero = hero; // Збережіть дані про героя в змінній hero
    });
  }

  buyItem(item: Item): void {
    this.shopService.buyItem(item, this.hero); // Передайте об'єкт героя у метод buyItem
  }

  openShopModal(): void {
    const shopModal = document.getElementById('shopModal');
    if (shopModal) {
      shopModal.style.display = 'block';
    }
  }
  closeShopModal(): void {
    const shopModal = document.getElementById('shopModal');
    if (shopModal) {
      shopModal.style.display = 'none';
    }
  }
}
