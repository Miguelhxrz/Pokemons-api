import { Pokemon } from 'src/pokemons/domain/pokemon.entity';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';

export interface IPokemonRepository {
  getAll(): Array<Pokemon>;
  getById(id: string): CreatePokemonDto;
  create(createPokemonDto: CreatePokemonDto): CreatePokemonDto;
  edit(id: string, updatePokemonDto: UpdatePokemonDto): UpdatePokemonDto;
  delete(id: string): void;
}
