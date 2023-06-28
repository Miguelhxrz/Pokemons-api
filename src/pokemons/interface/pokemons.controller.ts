import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  ParseIntPipe, //=> convierte el @param en int
} from '@nestjs/common';
import { PokemonsService } from '../application/service/pokemons.service';
import { UpdatePokemonDto } from '../application/dto/update-pokemon.dto';
import { Pokemon } from '../application/entity/pokemon.entity';
import { CreatePokemonDto } from '../application/dto/create-pokemon.dto';

@Controller('api')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Get('pokemons')
  getAll(): Promise<Pokemon[]> {
    return this.pokemonService.getAll();
  }

  @Get('pokemon/:id')
  getById(@Param('id', ParseIntPipe) id: number): Promise<Pokemon> {
    return this.pokemonService.getById(id);
  }

  @Post('pokemon')
  create(@Body() createPokmonDto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(createPokmonDto);
  }

  @Patch('pokemon/:id')
  edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ): Promise<void> {
    return this.pokemonService.edit(id, updatePokemonDto);
  }

  @Delete('pokemon/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.pokemonService.delete(id);
  }
}
