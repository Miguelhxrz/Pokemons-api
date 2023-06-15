import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { PokemonsService } from '../application/service/pokemons.service';
import { UpdatePokemonDto } from '../application/dto/update-pokemon.dto';
import { Pokemon } from '../domain/pokemon.entity';
import { CreatePokemonDto } from '../application/dto/create-pokemon.dto';

@Controller('api')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Get('pokemons')
  getAll(): Array<Pokemon> {
    return this.pokemonService.getAll();
  }

  @Get('pokemon/:id')
  getById(@Param('id') id: string): CreatePokemonDto {
    return this.pokemonService.getById(id);
  }

  @Post('pokemon')
  create(@Body() createPokmonDto: CreatePokemonDto): CreatePokemonDto {
    return this.pokemonService.create(createPokmonDto);
  }

  @Patch('pokemon/:id')
  edit(
    @Param('id') id: string,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ): UpdatePokemonDto {
    return this.pokemonService.edit(id, updatePokemonDto);
  }

  @Delete('pokemon/:id')
  delete(@Param('id') id: string): void {
    return this.pokemonService.delete(id);
  }
}
