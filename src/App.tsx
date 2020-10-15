import React, { FC } from 'react';
import './App.css';
import { PokemonsList } from './components/PokemonList';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PokemonDetails } from './components/PokemonDetails';
import { Search } from './components/Search';

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
            <PokemonsList />
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
