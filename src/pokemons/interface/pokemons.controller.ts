import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { PokemonsService } from '../infrastructure/pokemons.service';
import { CreatePokemonDto } from '../application/create-pokemon.dto';

@Controller('api')
export class PokemonsController {
  constructor(private readonly PokemonService: PokemonsService) {}

  @Get('pokemons')
  getAllPokemons() {
    return this.PokemonService.getAllPokemons();
  }

  @Get('pokemon/:id')
  getPokemon(@Param() id) {
    console.log(this.PokemonService.getPokemon(id));
    return this.PokemonService.getPokemon(id);
  }

  @Post('pokemon')
  createPokemon(@Body() pokemon: CreatePokemonDto): string {
    console.log(pokemon);
    return this.PokemonService.createPokemon();
  }

  @Patch('pokemon/:id')
  editPokemon(@Param() id): string {
    return this.PokemonService.editPokemon(id);
  }

  @Delete('pokemon/delete/:id')
  deletePokemon(@Param() id): string {
    return this.PokemonService.deletePokemon(id);
  }
}
