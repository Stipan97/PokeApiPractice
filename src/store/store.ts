import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { pokemonListReducer } from '../reducers/pokemonListReducer';

export const store = createStore(
  pokemonListReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
