import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ShopComponent } from './components/shop/shop.component';
import { SkillTreeComponent } from './components/skill-tree/skill-tree.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MonsterComponent } from './components/monster/monster.component';

@NgModule({
  declarations: [
    AppComponent, // Додайте AppComponent до декларацій
    GameComponent,
    InventoryComponent,
    ShopComponent,
    SkillTreeComponent,
    MonsterComponent,
  ],
  imports: [CommonModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
