import { Injectable } from '@nestjs/common';

import { Pokemon } from '../application/entity/pokemon.entity';
import { IPokemonRepository } from '../application/repository/pokemon.repository.interface';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PokemonsRepository implements IPokemonRepository {
  private readonly repository: Repository<Pokemon>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(Pokemon);
  }

  async getAll(): Promise<Pokemon[]> {
    return this.repository.find();
  }

  async getById(id: number): Promise<Pokemon> {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  async create(pokemon: Pokemon): Promise<Pokemon> {
    const newPokemon = this.repository.create(pokemon);
    this.repository.save(newPokemon);
    return newPokemon;
  }

  async edit(id: number, updatePokemonDto: Pokemon): Promise<void> {
    this.repository.update({ id }, updatePokemonDto); //Esto devuelve si alguna columna fue afectada por el edit
  }

  async delete(id: number): Promise<void> {
    this.repository.delete({ id }); //Esto devuelve si alguna columna fue afectada por el delete
  }
}
