import { ThunkAction } from 'redux-thunk';
import {
  GET_POKEMONS,
  SET_ERROR_LIST,
  SET_LOADING_LIST,
} from '../models/types';
import {
  pokemonListReducer,
  ServerResponse,
} from '../reducers/pokemonListReducer';

export interface GetPokemonsAction {
  type: typeof GET_POKEMONS;
  payload: ServerResponse;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING_LIST;
}

export interface SetErrorAction {
  type: typeof SET_ERROR_LIST;
  payload: string;
}
export type PokemonsAction =
  | GetPokemonsAction
  | SetLoadingAction
  | SetErrorAction;

export const loadPokemonList = (
  page: number,
): ThunkAction<void, typeof pokemonListReducer, null, PokemonsAction> => {
  return async (dispatch) => {
    const limit = 15;
    const offset = page * limit - limit;
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
      );
      const responseData: ServerResponse = await response.json();

      dispatch({
        type: GET_POKEMONS,
        payload: responseData,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR_LIST,
        payload: error.message,
      });
    }
  };
};

export const setloading = (): PokemonsAction => {
  return {
    type: SET_LOADING_LIST,
  };
};

export const setError = (): PokemonsAction => {
  return {
    type: SET_ERROR_LIST,
    payload: '',
  };
};
