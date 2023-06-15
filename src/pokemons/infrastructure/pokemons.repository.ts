import { Injectable } from '@nestjs/common';

import { Pokemons } from '../infrastructure/data';
import { UpdatePokemonDto } from '../application/update-pokemon.dto';
import { Pokemon } from '../application/pokemon.entity';
import { CreatePokemonDto } from '../application/create-pokemon.dto';

@Injectable()
export class PokemonsRepository {
  getAll(): Array<Pokemon> {
    return Pokemons;
  }

  getById(id: string): CreatePokemonDto {
    return Pokemons.find((pokemon) => pokemon.id === parseInt(id));
  }

  create(pokemon: CreatePokemonDto): CreatePokemonDto {
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

  edit(id: string, updatePokemonDto: UpdatePokemonDto): UpdatePokemonDto {
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
