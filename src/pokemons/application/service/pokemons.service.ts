import { Injectable } from '@nestjs/common';
import { PokemonsRepository } from '../../infrastructure/pokemons.repository';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';
import { Pokemon } from '../../domain/pokemon.entity';

@Injectable()
export class PokemonsService {
  constructor(private readonly pokemonRepository: PokemonsRepository) {}

  getAll(): Array<Pokemon> {
    return this.pokemonRepository.getAll();
  }

  getById(id: string): CreatePokemonDto {
    return this.pokemonRepository.getById(id);
  }

  create(createPokemonDto: CreatePokemonDto): CreatePokemonDto {
    return this.pokemonRepository.create(createPokemonDto);
  }

  edit(id: string, updatePokemonDto: UpdatePokemonDto): UpdatePokemonDto {
    return this.pokemonRepository.edit(id, updatePokemonDto);
  }

  delete(id: string): void {
    return this.pokemonRepository.delete(id);
  }
}
