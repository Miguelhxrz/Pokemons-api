import { Injectable } from '@nestjs/common';

import { Pokemons } from '../infrastructure/data';
import { CreatePokemonDto } from '../application/create-pokemon.dto';
import { UpdatePokemonDto } from '../application/update-pokemon.dto';

@Injectable()
export class PokemonsRepository {
  getAll() {
    return Pokemons;
  }

  getById(id: string) {
    const pokeId = parseInt(id);
    const pokemon = Pokemons.filter((pokemon) => pokemon.id == pokeId);
    return pokemon;
  }

  create(pokemon: CreatePokemonDto) {
    console.log(pokemon);

    const newPokemon = {
      id: Pokemons.length + 1,
      ...pokemon,
      createAt: null,
      updateAt: null,
      deleteAt: null,
    };

    Pokemons.push(newPokemon);

    return Pokemons;
  }

  edit(id: string, editPoke: UpdatePokemonDto) {
    const pokeId = parseInt(id);
    let pokemon = Pokemons.find((pokemon) => pokemon.id == pokeId);
    if (pokemon) {
      pokemon = { ...pokemon, ...editPoke };
    }
    console.log(pokemon);
    return pokemon;
  }

  delete(id: string) {
    const pokeId = parseInt(id);
    const Pokemones = Pokemons.filter((pokemon) => pokemon.id != pokeId);
    return Pokemones;
  }
}
