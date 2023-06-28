import { Injectable } from '@nestjs/common';
import { PokemonsRepository } from '../../infrastructure/pokemons.repository';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';
import { Pokemon } from '../entity/pokemon.entity';
import {
  fromCreatePokemonToPokemon,
  updatePokemonDtoToPokemon,
} from '../mappers/pokemon.mapper';

@Injectable()
export class PokemonsService {
  constructor(private readonly pokemonRepository: PokemonsRepository) {}

  getAll() {
    return this.pokemonRepository.getAll();
  }

  getById(id: number) {
    return this.pokemonRepository.getById(id);
  }

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonRepository.create(
      fromCreatePokemonToPokemon(createPokemonDto),
    );
  }

  edit(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonRepository.edit(
      id,
      updatePokemonDtoToPokemon(updatePokemonDto),
    );
  }

  delete(id: number) {
    return this.pokemonRepository.delete(id);
  }
}
