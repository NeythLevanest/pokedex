import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poke-skills-card',
  templateUrl: './poke-skills-card.component.html',
  styleUrls: ['./poke-skills-card.component.scss']
})
export class PokeSkillsCardComponent {
    @Input() moves:any[] = [];
}
