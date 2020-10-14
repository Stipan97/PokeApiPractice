import { PokemonsAction } from '../actions/pokemonListActions';
import { Pokemon } from '../models/Pokemon';
import {
  GET_POKEMONS,
  SET_ERROR_LIST,
  SET_LOADING_LIST,
} from '../models/types';

export interface ServerResponse {
  count?: number;
  results?: Pokemon[];
}

export interface PokemonsState {
  data?: ServerResponse;
  isLoading: boolean;
  error?: string;
}

const INITIAL_STATE: PokemonsState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const pokemonListReducer = (
  state: PokemonsState = INITIAL_STATE,
  action: PokemonsAction,
) => {
  switch (action.type) {
    case GET_POKEMONS: {
      return {
        data: action.payload,
        isLoading: false,
        error: '',
      };
    }
    case SET_LOADING_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_ERROR_LIST: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
