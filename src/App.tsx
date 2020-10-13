import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemonList } from './actions/pokemonListActions';
import './App.css';
import { PokemonsList } from './components/PokemonList';
import { PokemonsState } from './reducers/pokemonListReducer';

const App: FC = () => {
  const dispatch = useDispatch();
  const pokemonsListData = useSelector((state: PokemonsState) => state.data);
  if (!pokemonsListData) {
    dispatch(loadPokemonList(1));
  }
  console.log(pokemonsListData);

  return (
    <div className="App">
      {pokemonsListData ? (
        <PokemonsList data={pokemonsListData} />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default App;
