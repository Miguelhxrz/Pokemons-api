import { Module } from '@nestjs/common';
import { PokemonsController } from './interface/pokemons.controller';
import { PokemonsService } from './application/pokemons.service';

@Module({
  imports: [],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class PokemonsModule {}
