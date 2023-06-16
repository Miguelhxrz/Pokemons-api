import { Injectable } from '@nestjs/common';
import { PokemonsRepository } from '../../infrastructure/pokemons.repository';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';
import { Pokemon } from '../../domain/pokemon.entity';
import {
  fromCreatePokemonToPokemon,
  updatePokemonDtoToPokemon,
} from '../mappers/pokemon.mapper';

@Injectable()
export class PokemonsService {
  constructor(private readonly pokemonRepository: PokemonsRepository) {}

  getAll(): Array<Pokemon> {
    return this.pokemonRepository.getAll();
  }

  getById(id: string): Pokemon {
    return this.pokemonRepository.getById(id);
  }

  create(createPokemonDto: CreatePokemonDto): Pokemon {
    return this.pokemonRepository.create(
      fromCreatePokemonToPokemon(createPokemonDto),
    );
  }

  edit(id: string, updatePokemonDto: UpdatePokemonDto): Pokemon {
    return this.pokemonRepository.edit(
      id,
      updatePokemonDtoToPokemon(updatePokemonDto),
    );
  }

  delete(id: string): void {
    return this.pokemonRepository.delete(id);
  }
}
