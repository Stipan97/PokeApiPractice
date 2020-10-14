import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadPokemonDetails } from '../actions/pokemonDetailsAction';
import { RootReducerState } from '../store/store';

interface PokemonDetailsProps {
  name: string;
}

export const PokemonDetails: FC = () => {
  const { name } = useParams<PokemonDetailsProps>();
  console.log(name);

  const dispatch = useDispatch();
  const pokemonDetailsData = useSelector(
    (state: RootReducerState) => state.details.data,
  );

  const fetchData = (name: string) => {
    dispatch(loadPokemonDetails(name));
  };

  useEffect(() => {
    fetchData(name);
  }, []);

  return (
    <div>
      <div>{pokemonDetailsData?.name}</div>
      <div>
        <img
          src={pokemonDetailsData?.sprites.front_default}
          alt="front sprite"
        />
        <img src={pokemonDetailsData?.sprites.back_default} alt="back sprite" />
      </div>
      <div>
        {pokemonDetailsData?.stats.map((stat) => (
          <div key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </div>
        ))}
      </div>
      <div>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};
