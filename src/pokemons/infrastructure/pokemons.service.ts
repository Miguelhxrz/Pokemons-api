import { Injectable } from '@nestjs/common';

import { Pokemons } from './data';
import { CreatePokemonDto } from '../application/create-pokemon.dto';

@Injectable()
export class PokemonsService {
  getAllPokemons() {
    return Pokemons;
  }

  getPokemon({ id }) {
    const pokemon = Pokemons.filter((pokemon) => pokemon.id == id);
    return pokemon;
  }

  createPokemon() {
    return 'Se esta creando un pokemon';
  }

  editPokemon({ id }) {
    return `Se edito el pokemon con el id ${id}`;
  }

  deletePokemon({ id }) {
    return `Se elimino el pokemon con el id: ${id}`;
  }
}
