import { Pokemon } from 'src/pokemons/application/entity/pokemon.entity';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';

export const fromCreatePokemonToPokemon = (
  createPokemonDto: CreatePokemonDto,
): Pokemon => {
  const pokemon = new Pokemon();

  pokemon.name = createPokemonDto.name;
  pokemon.types = createPokemonDto.types;

  return pokemon;
};

export const updatePokemonDtoToPokemon = (
  updatePokemonDto: UpdatePokemonDto,
): Pokemon => {
  const pokemon = new Pokemon();

  pokemon.name = updatePokemonDto.name;
  pokemon.types = updatePokemonDto.types;

  return pokemon;
};
