import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { PokemonsService } from '../application/pokemons.service';
import { CreatePokemonDto } from '../application/create-pokemon.dto';
import { UpdatePokemonDto } from '../application/update-pokemon.dto';
import { Pokemon } from '../application/pokemon.entity';

@Controller('api')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Get('pokemons')
  getAll() {
    return this.pokemonService.getAll();
  }

  @Get('pokemon/:id')
  getById(@Param('id') id: string) {
    console.log(this.pokemonService.getById(id));
    return this.pokemonService.getById(id);
  }

  @Post('pokemon')
  create(@Body() pokemon: CreatePokemonDto): Array<CreatePokemonDto> {
    console.log(pokemon);
    return this.pokemonService.create(pokemon);
  }

  @Patch('pokemon/:id')
  edit(@Param('id') id: string, @Body() pokedit: UpdatePokemonDto) {
    return this.pokemonService.edit(id, pokedit);
  }

  @Delete('pokemon/:id')
  delete(@Param('id') id: string): Array<Pokemon> {
    return this.pokemonService.delete(id);
  }
}
