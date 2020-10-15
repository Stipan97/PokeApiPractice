import React, { useEffect } from 'react';
import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPokemonList } from '../actions/pokemonListActions';
import { RootReducerState } from '../store/store';

export const PokemonsList: FC = () => {
  const dispatch = useDispatch();
  const pokemonsListState = useSelector(
    (state: RootReducerState) => state.list,
  );
  const pokemonsListData = pokemonsListState.data;

  const fetchData = (page: number = 1) => {
    dispatch(loadPokemonList(page));
  };

  if (!pokemonsListData) {
    if (!pokemonsListState.isLoading) {
      fetchData();
    }
  }

  return (
    <div className={'pokemon-list-wrapper'}>
      {pokemonsListData ? (
        pokemonsListData.results?.map((pokemon) => (
          <div className={'pokemon-list-item'} key={pokemon.name}>
            {pokemon.name}
            <Link to={`/pokemon/${pokemon.name}`}>ViewLink</Link>
          </div>
        ))
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
