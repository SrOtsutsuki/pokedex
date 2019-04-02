import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  pokemons: any;
  url= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  urlgif= "http://play.pokemonshowdown.com/sprites/xyani/";


  constructor(public pokemonService: PokemonService) {


    this.getPokemons();
    // this.mostrarPokemons(this.pokemons);




  }

  ngOnInit() {
  }

  getPokemons() {
    this.pokemonService.getPokemon().subscribe((data: any) => {
      console.log(data.results)
      this.pokemons = data.results

    })
  }

  mostrarPokemons(pokemons: any) {

    pokemons.forEach(element => {
      console.log(element.name)
    });

  }


  

}
