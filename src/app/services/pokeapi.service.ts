import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import URL_SERVICIOS from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private _refreshNeeded$ = new Subject<void>();
  constructor(
    public http: HttpClient,

  ) { }

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  getPokemonDetails(_id:string)
  {
    let url = URL_SERVICIOS.pokeapi + "/"+ _id
    return this.http.get(url);
  }

  getPokemonDetailsbyURL(_url:string)
  {
    return this.http.get(_url);
  }

  getPokemonEvolution(_url:string)
  {
    return this.http.get(_url)
  }

  getPokemonSpecies(_name:string)
  {
    let url = URL_SERVICIOS.pokeapispecies + "/"+ _name
    return this.http.get(url)
  }

  getPokemonsList(_offset:number, _limit:number)
  {
    let url = URL_SERVICIOS.pokeapi +"?offset="+_offset+"&limit="+_limit;
    return this.http.get(url);
  }
}
