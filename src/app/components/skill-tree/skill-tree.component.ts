import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill/skill.service';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.css'],
})
export class SkillTreeComponent implements OnInit {
  skills: Skill[];

  constructor(private skillService: SkillService) {
    this.skills = [];
  }

  ngOnInit(): void {
    this.skills = this.skillService.getSkillTree();
  }
}
