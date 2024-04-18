import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from '../app/components/game/game.component';
import { MoneyComponent } from './components/money-earning/money.component';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'money', component: MoneyComponent },
  //{ path: '*', redirectTo: '/game', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
