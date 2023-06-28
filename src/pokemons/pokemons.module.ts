import { Module } from '@nestjs/common';
import { PokemonsController } from './interface/pokemons.controller';
import { PokemonsService } from './application/service/pokemons.service';
import { PokemonsRepository } from './infrastructure/pokemons.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './application/entity/pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonsController],
  providers: [PokemonsService, PokemonsRepository],
})
export class PokemonsModule {}
