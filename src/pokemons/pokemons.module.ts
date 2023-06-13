import { Module } from '@nestjs/common';
import { PokemonsController } from './interface/pokemons.controller';
import { PokemonsService } from './application/pokemons.service';
import { PokemonsRepository } from './infrastructure/pokemons.repository';

@Module({
  imports: [],
  controllers: [PokemonsController],
  providers: [PokemonsService, PokemonsRepository],
})
export class PokemonsModule {}
