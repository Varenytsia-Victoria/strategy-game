import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../services/level/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css'],
})
export class LevelComponent implements OnInit {
  currentLevel: number;

  constructor(private levelService: LevelService) {
    this.currentLevel = 1;
  }

  ngOnInit(): void {
    this.currentLevel = this.levelService.getCurrentLevel();
  }

  upgradeLevel(): void {
    this.levelService.upgradeLevel();
    this.currentLevel = this.levelService.getCurrentLevel();
  }
}
