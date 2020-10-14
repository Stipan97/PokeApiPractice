import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ServerResponse } from '../reducers/pokemonListReducer';

interface PokemonsListProps {
  data: ServerResponse;
}

export const PokemonsList: FC<PokemonsListProps> = ({ data }) => {
  return (
    <div className={'pokemon-list-wrapper'}>
      {data.results?.map((pokemon) => (
        <div className={'pokemon-list-item'} key={pokemon.name}>
          {pokemon.name}
          <Link to={`/pokemon/${pokemon.name}`}>ViewLink</Link>
        </div>
      ))}
    </div>
  );
};
