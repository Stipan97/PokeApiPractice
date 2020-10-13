import { render } from '@testing-library/react';
import React from 'react';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { ServerResponse } from '../reducers/pokemonListReducer';
import { store } from '../store/store';
import { PokemonDetails } from './PokemonDetails';

interface PokemonsListProps {
  data: ServerResponse;
}

export const PokemonsList: FC<PokemonsListProps> = ({ data }) => {
  const onClickView = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { pokemonUrl } = event.currentTarget.dataset;

    if (pokemonUrl) {
      //ovdje mi ne zeli samo return, a render mi izbaci izvan root html elementa,
      //pa sam moro pozvat providera
      //kad uvrstim rute ovo cu izbjec jer nece vise bi render nego return, valjda.
      render(
        <Provider store={store}>
          <PokemonDetails url={pokemonUrl} />
        </Provider>,
      );
    }
  };

  return (
    <div className={'pokemon-list-wrapper'}>
      {data.results?.map((pokemon) => (
        <div className={'pokemon-list-item'} key={pokemon.name}>
          {pokemon.name}
          <button onClick={onClickView} data-pokemon-url={pokemon.url}>
            View
          </button>
        </div>
      ))}
    </div>
  );
};
