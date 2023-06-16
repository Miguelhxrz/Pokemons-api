import { Injectable } from '@nestjs/common';

import { Pokemons } from '../infrastructure/data';
import { Pokemon } from '../domain/pokemon.entity';
import { IPokemonRepository } from '../application/repository/pokemon.repository.interface';

@Injectable()
export class PokemonsRepository implements IPokemonRepository {
  getAll(): Array<Pokemon> {
    return Pokemons;
  }

  getById(id: string): Pokemon {
    return Pokemons.find((pokemon) => pokemon.id === parseInt(id));
  }

  create(pokemon: Pokemon): Pokemon {
    const newPokemon = {
      id: Pokemons.length + 1,
      ...pokemon,
      createAt: new Date().toUTCString(),
      updateAt: new Date().toUTCString(),
      deleteAt: null,
    };

    Pokemons.push(newPokemon);

    return Pokemons.find((pokemon) => pokemon.id == newPokemon.id);
  }

  edit(id: string, updatePokemonDto: Pokemon): Pokemon {
    let pokemon = Pokemons.find((pokemon) => pokemon.id == parseInt(id));
    if (pokemon) {
      pokemon = {
        ...pokemon,
        ...updatePokemonDto,
        updateAt: new Date().toUTCString(),
      };
    }
    return pokemon;
  }

  delete(id: string): void {
    const PokeIndex = Pokemons.findIndex(
      (pokemon) => pokemon.id === parseInt(id),
    );
    Pokemons.splice(PokeIndex, 1);
  }
}
