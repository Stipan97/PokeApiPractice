import React, { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemonList } from './actions/pokemonListActions';
import './App.css';
import { PokemonsList } from './components/PokemonList';
import { PokemonsState } from './reducers/pokemonListReducer';

const App: FC = () => {
  const dispatch = useDispatch();
  const pokemonsListData = useSelector((state: PokemonsState) => state.data);

  const fetchData = (page: number = 1) => {
    console.log(page);

    dispatch(loadPokemonList(page));
  };

  if (!pokemonsListData) {
    fetchData();
  }

  console.log(pokemonsListData);

  return (
    <div className="App">
      {pokemonsListData ? (
        <PokemonsList data={pokemonsListData} />
      ) : (
        <h2>Loading...</h2>
      )}
      <ReactPaginate
        pageCount={Math.ceil(pokemonsListData?.count! / 15)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => fetchData(data.selected + 1)}
        containerClassName={'pagination'}
      />
    </div>
  );
};

export default App;
