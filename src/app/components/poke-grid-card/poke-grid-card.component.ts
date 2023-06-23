import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { filter } from 'rxjs';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-poke-grid-card',
  templateUrl: './poke-grid-card.component.html',
  styleUrls: ['./poke-grid-card.component.scss']
})
export class PokeGridCardComponent implements OnInit{
  pokemonList:Pokemon[] = [];
  pokemon!:Pokemon;

  constructor(
    private router: Router,
    private pokepapi: PokeapiService
  ) 
  {
    this.loadPokemons();
    console.log(this.pokemonList)
  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });

   
  }


  loadPokemons()
  {
     console.log("Se ejecuta")
      this.pokepapi.getPokemonsList(0,100)
      .subscribe(
        (data:any) => {
          let results:any[] = data.results;
          console.log(results)
          results.forEach((element:any) => {
             this.pokepapi.getPokemonDetailsbyURL(element.url)
             .subscribe(
               (data:any) =>
               {
                 this.pokemonList.push(data);
               }
             );
          });
        }
      )
  }
  //    const url = `https://pokeapi.co/api/v2/pokemon?offset=${1}&limit=${10}`
  //    return fetch(url)
  //        .then((response) => response.json())
  //        .then((jsonBody) => jsonBody.results)
  //        .then((pokemons) => pokemons.map(this.getPokemonDetail))
  //        .then((detailRequests) => Promise.all(detailRequests))
  //        .then((pokemonsDetails) => {this.pokemonList = pokemonsDetails;  console.log(this.pokemonList)})
  //        .catch((error) => console.error(error))
  //  }

  //  getPokemonDetail = (pokemon:any) => {
  //    return fetch(pokemon.url)
  //            .then((response) => response.json())
  //            .then(pokemon)
  //  }
}
