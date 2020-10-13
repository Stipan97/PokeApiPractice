import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemonDetails } from '../actions/pokemonDetailsAction';
import { RootReducerState } from '../store/store';

interface PokemonDetailsProps {
  url: string;
}

export const PokemonDetails: FC<PokemonDetailsProps> = ({ url }) => {
  const dispatch = useDispatch();
  const pokemonDetailsData = useSelector(
    (state: RootReducerState) => state.details.data,
  );

  const fetchData = (url: string) => {
    dispatch(loadPokemonDetails(url));
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div>
      <div>{pokemonDetailsData?.name}</div>
      <div>
        {pokemonDetailsData?.stats.map((stat) => (
          <div key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </div>
        ))}
      </div>
    </div>
  );
};
