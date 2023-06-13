import { Injectable } from '@nestjs/common';
import { PokemonsRepository } from '../infrastructure/pokemons.repository';
import { CreatePokemonDto } from '../application/create-pokemon.dto';
import { UpdatePokemonDto } from '../application/update-pokemon.dto';

@Injectable()
export class PokemonsService {
  pokemonRepository = new PokemonsRepository();

  getAll() {
    return this.pokemonRepository.getAll();
  }

  getById(id: string) {
    this.pokemonRepository.getById(id);
  }

  create(pokemon: CreatePokemonDto) {
    return this.pokemonRepository.create(pokemon);
  }

  edit(id: string, editPoke: UpdatePokemonDto) {
    return this.pokemonRepository.edit(id, editPoke);
  }

  delete(id: string) {
    return this.pokemonRepository.delete(id);
  }
}
