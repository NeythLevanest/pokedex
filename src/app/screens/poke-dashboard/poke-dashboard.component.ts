import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { PokeDescriptionCardComponent } from 'src/app/components/poke-description-card/poke-description-card.component';
import { PokeSkillsCardComponent } from 'src/app/components/poke-skills-card/poke-skills-card.component';
import { Pokemon } from 'src/app/models/pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import * as feather from 'feather-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-poke-dashboard',
  templateUrl: './poke-dashboard.component.html',
  styleUrls: ['./poke-dashboard.component.scss']
})
export class PokeDashboardComponent implements OnInit{

  pokemon!: Pokemon;
  tabactualComponent!:Number; 

  constructor(
    public http:HttpClient,
    private pokeapi:PokeapiService,
    private router: Router,
  )
  {
    this.loadPokemonDetails();
  }
  ngOnInit(): void {
    this.loadPokemonDetails();
  }

  loadPokemonDetails()
  {
    let pokeId = localStorage.getItem("pokeId");
    this.getPokemonDetails(pokeId);
  }
  getPokemonDetails(_id:any)
  {
    this.pokeapi.getPokemonDetails(_id)
    .subscribe(
      (resp:any) =>
      {
        this.pokemon = resp;
        console.log("Este es tu pokemon:\n");
        console.log(this.pokemon as Pokemon)
      }
    );
  }

  renderComponent(_component:Number)
  {
    this.tabactualComponent = _component;
  }

  ngAfterViewInit(): void {
    feather.replace();
  }
  gotoBack()
  {
    localStorage.removeItem("pokeId");
    this.router.navigate([""]).then(() => {
      
    });
  }
}
