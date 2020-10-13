import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  pokemonDetailsReducer,
  PokemonsDetailsState,
} from '../reducers/pokemonDetailsReducer';
import {
  pokemonListReducer,
  PokemonsState,
} from '../reducers/pokemonListReducer';

export interface RootReducerState {
  list: PokemonsState;
  details: PokemonsDetailsState;
}

export const store = createStore(
  combineReducers({ list: pokemonListReducer, details: pokemonDetailsReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);
