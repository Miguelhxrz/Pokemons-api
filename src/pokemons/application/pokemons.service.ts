import { Injectable } from '@nestjs/common';
import { PokemonsRepository } from '../infrastructure/pokemons.repository';
import { CreatePokemonDto } from '../application/create-pokemon.dto';
import { UpdatePokemonDto } from '../application/update-pokemon.dto';
import { Pokemon } from './pokemon.entity';

@Injectable()
export class PokemonsService {
  pokemonRepository = new PokemonsRepository();

  getAll(): Array<Pokemon> {
    return this.pokemonRepository.getAll();
  }

  getById(id: string): Pokemon {
    return this.pokemonRepository.getById(id);
  }

  create(pokemon: CreatePokemonDto): Array<Pokemon> {
    return this.pokemonRepository.create(pokemon);
  }

  edit(id: string, editPoke: UpdatePokemonDto): Pokemon {
    return this.pokemonRepository.edit(id, editPoke);
  }

  delete(id: string): Array<Pokemon> {
    return this.pokemonRepository.delete(id);
  }
}
