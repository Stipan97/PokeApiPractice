import React from 'react';
import { FC } from 'react';
import { ServerResponse } from '../reducers/pokemonListReducer';

interface PokemonsListProps {
  data: ServerResponse;
}

export const PokemonsList: FC<PokemonsListProps> = ({ data }) => {
  return (
    <div>
      {data.results?.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </div>
  );
};
