import { Component, Input } from '@angular/core';
import { Monster } from '../../models/monster';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css'],
})
export class MonsterComponent {
  @Input() monster: Monster[] = []; // Зверніть увагу, що тепер це масив монстрів

  constructor() {}
}
