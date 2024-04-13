import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ShopComponent } from './components/shop/shop.component';
import { SkillTreeComponent } from './components/skill-tree/skill-tree.component';
import { MoneyComponent } from './components/money-earning/money.component';

@NgModule({
  declarations: [
    MoneyComponent,
    GameComponent,
    InventoryComponent,
    ShopComponent,
    SkillTreeComponent,
  ],
  imports: [CommonModule],
  exports: [
    GameComponent, // Якщо вам потрібно експортувати GameComponent для використання у інших модулях
  ],
})
export class GameModule {}
