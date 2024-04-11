import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory/inventory.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  items: Item[];

  constructor(private inventoryService: InventoryService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = this.inventoryService.getInventory();
  }
}
