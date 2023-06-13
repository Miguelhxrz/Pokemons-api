import { Injectable } from '@nestjs/common';

import { Pokemons } from '../infrastructure/data';
import { UpdatePokemonDto } from '../application/update-pokemon.dto';
import { Pokemon } from '../application/pokemon.entity';

@Injectable()
export class PokemonsRepository {
  getAll(): Array<Pokemon> {
    return Pokemons;
  }

  getById(id: string): Pokemon {
    const pokeId = parseInt(id);
    const pokemon = Pokemons.filter((pokemon) => pokemon.id == pokeId);
    return pokemon[0];
  }

  create(pokemon: Pokemon): Array<Pokemon> {
    const newPokemon = {
      id: Pokemons.length + 1,
      ...pokemon,
      createAt: '',
      updateAt: '',
      deleteAt: '',
    };

    Pokemons.push(newPokemon);

    return Pokemons;
  }

  edit(id: string, editPoke: UpdatePokemonDto): Pokemon {
    const pokeId = parseInt(id);
    let pokemon = Pokemons.find((pokemon) => pokemon.id == pokeId);
    if (pokemon) {
      pokemon = { ...pokemon, ...editPoke };
    }
    return pokemon;
  }

  delete(id: string): Array<Pokemon> {
    const pokeId = parseInt(id);
    const PokeIndex = Pokemons.findIndex((pokemon) => pokemon.id === pokeId);
    console.log(PokeIndex);
    Pokemons.splice(PokeIndex, 1);
    return Pokemons;
  }
}
