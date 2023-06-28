import { Pokemon } from 'src/pokemons/application/entity/pokemon.entity';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';

export interface IPokemonRepository {
  getAll(): Promise<Pokemon[]>;
  getById(id: number): Promise<Pokemon>;
  create(createPokemonDto: CreatePokemonDto): Promise<Pokemon>;
  edit(id: number, updatePokemonDto: UpdatePokemonDto): Promise<void>;
  delete(id: number): Promise<void>;
}
