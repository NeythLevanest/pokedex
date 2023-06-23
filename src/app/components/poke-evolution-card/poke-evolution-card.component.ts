import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-poke-evolution-card',
  templateUrl: './poke-evolution-card.component.html',
  styleUrls: ['./poke-evolution-card.component.scss']
})
export class PokeEvolutionCardComponent {

  @Input() pokemon!:Pokemon;

  
  pokemonEvoList:any[] = [];
  species_data:any;
  evolutions:any;
  pokemonTmp!:Pokemon;

  constructor(
    private router: Router,
    private pokepapi: PokeapiService
  ) 
  {

  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });

    this.loadSpecieInfo();
    
  }

  loadEvolutions()
  {
    let evolution_chain_url = this.species_data["evolution_chain"]["url"]
    this.pokepapi.getPokemonEvolution(evolution_chain_url)
    .subscribe(
      (data:any) => {
        this.evolutions = data.chain
        console.log(this.evolutions)
        this.extractNames(this.evolutions)
      }
    )
  }


  loadSpecieInfo()
  {
    this.pokepapi.getPokemonSpecies(this.pokemon.name)
    .subscribe(
      (data:any) => {
        this.species_data = data;
        this.loadEvolutions();
      }
    )
  }

  extractNames(_evolutions:any, names: string[] = [])
  {
    if(_evolutions.species)
    {
      names.push(_evolutions.species.name);
      this.pokepapi.getPokemonDetails(_evolutions.species.name)
      .subscribe(
        (data:any) => {
          this.pokemonTmp = data;
          console.log(data)
          this.pokemonEvoList.push(this.pokemonTmp);
        }
      )
    }
    if(_evolutions.evolves_to)
    {
      for(let evo of _evolutions.evolves_to)
      {
        setTimeout(() => {
          this.extractNames(evo, names);
        }, 1000);
      }
    }
  }

  goToPokeInfo(_pokeId:any) {
    console.log("Se ejecuta: " + _pokeId)
    this.router.navigate(["/"]).then(() => {
      // let pokeId = this.pokemon.id.toString();
      localStorage.setItem("pokeId", _pokeId);
      this.router.navigate(["poke-info"])
    });
  }
 
}

//  function extractNames(_evolutions:any, names: string[] = []): string[]
//  {
//    if(_evolutions.species)
//    {
//      names.push(_evolutions.species.name);
//    }
//    if(_evolutions.evolves_to)
//    {
//      for(let evo of _evolutions.evolves_to)
//      {
//        extractNames(evo, names);
//      }
//    }
//    console.log(names)
//    return names;
//  }
