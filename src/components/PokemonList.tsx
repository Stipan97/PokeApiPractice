import { render } from '@testing-library/react';
import React from 'react';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import { ServerResponse } from '../reducers/pokemonListReducer';
import { store } from '../store/store';
import { PokemonDetails } from './PokemonDetails';

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
