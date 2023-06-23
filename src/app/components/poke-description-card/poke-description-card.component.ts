import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-description-card',
  templateUrl: './poke-description-card.component.html',
  styleUrls: ['./poke-description-card.component.scss']
})
export class PokeDescriptionCardComponent {
  @Input() pokemon!: Pokemon;

  ngOnInit(): void {
    console.log(this.pokemon)
  }
}
