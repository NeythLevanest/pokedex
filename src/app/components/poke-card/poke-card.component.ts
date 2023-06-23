import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent {
  @Input() pokemon!:Pokemon

  constructor(
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  goToPokeInfo(_pokeId:any) {
    this.router.navigate(["poke-info"]).then(() => {
      // let pokeId = this.pokemon.id.toString();
      localStorage.setItem("pokeId", _pokeId);
    });
  }
}
