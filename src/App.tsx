import React, { FC, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemonList } from './actions/pokemonListActions';
import './App.css';
import { PokemonsList } from './components/PokemonList';
import { RootReducerState } from './store/store';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PokemonDetails } from './components/PokemonDetails';

const App: FC = () => {
  const dispatch = useDispatch();
  const pokemonsListData = useSelector(
    (state: RootReducerState) => state.list.data,
  );

  const fetchData = (page: number = 1) => {
    dispatch(loadPokemonList(page));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
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
          </Route>
          <Route path="/pokemon/:name">
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
