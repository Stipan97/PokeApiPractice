import { PokemonDetailsActions } from '../actions/pokemonDetailsAction';
import { ServerResponseDetails } from '../models/Pokemon';
import {
  GET_DETAILS,
  GET_ERROR_DETAILS,
  GET_LOADING_DETAILS,
} from '../models/types';

export interface PokemonsDetailsState {
  data: ServerResponseDetails[];
  isLoading: boolean;
  error?: string;
}

const INITIAL_STATE: PokemonsDetailsState = {
  data: [],
  isLoading: false,
  error: undefined,
};

export const pokemonDetailsReducer = (
  state: PokemonsDetailsState = INITIAL_STATE,
  action: PokemonDetailsActions,
) => {
  switch (action.type) {
    case GET_DETAILS: {
      return {
        data: state.data?.concat(action.payload),
        isLoading: false,
        error: '',
      };
    }
    case GET_LOADING_DETAILS: {
      return {
        data: state.data,
        isLoading: true,
        error: '',
      };
    }
    case GET_ERROR_DETAILS: {
      return {
        isLoading: false,
        error: 'Unable to find pokemon',
      };
    }
    default: {
      return state;
    }
  }
};
