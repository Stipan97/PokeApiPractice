import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadPokemonDetails } from '../actions/pokemonDetailsAction';
import { RootReducerState } from '../store/store';

interface PokemonDetailsProps {
  name: string;
}

export const PokemonDetails: FC = () => {
  const { name } = useParams<PokemonDetailsProps>();

  const dispatch = useDispatch();
  const pokemonDetailsState = useSelector(
    (state: RootReducerState) => state.details,
  );
  const pokemonDetailsData = pokemonDetailsState.data;

  let pokemonDetail = pokemonDetailsData?.find((obj) => {
    return obj.name === name;
  });

  const fetchData = (name: string) => {
    console.log('pozvo ' + name);

    dispatch(loadPokemonDetails(name));
  };

  if (!pokemonDetailsState.error) {
    if (!pokemonDetail) {
      if (!pokemonDetailsState.isLoading) {
        fetchData(name);
      }
    }
  }

  return (
    <div>
      {pokemonDetail ? (
        <div>
          <div>{pokemonDetail.name}</div>
          <div>
            <img src={pokemonDetail.sprites.front_default} alt="front sprite" />
            <img src={pokemonDetail.sprites.back_default} alt="back sprite" />
          </div>
          <div>
            {pokemonDetail.stats.map((stat) => (
              <div key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </div>
            ))}
          </div>
          <div>
            <Link to="/">Back to list</Link>
          </div>
        </div>
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};
