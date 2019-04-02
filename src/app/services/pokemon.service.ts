import { Injectable, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observer, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  cont=0;

  constructor(public httpClient : HttpClient) {

   }

   getPokemon() : Observable<any>{
      return this.httpClient.get("https://pokeapi.co/api/v2/pokemon?offset=" + this.cont + "&limit=800");

   }

   sumCont(){
     this.cont+=20;
   }
}
