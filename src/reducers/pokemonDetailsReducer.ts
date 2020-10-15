import { PokemonDetailsActions } from '../actions/pokemonDetailsAction';
import { ServerResponseDetails } from '../models/Pokemon';
import {
  GET_DETAILS,
  GET_ERROR_DETAILS,
  GET_LOADING_DETAILS,
  UNSET_ERROR_DETAILS,
} from '../models/types';

export interface PokemonsDetailsState {
  data: ServerResponseDetails[];
  isLoading: boolean;
  error?: boolean;
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
        error: false,
      };
    }
    case GET_LOADING_DETAILS: {
      return {
        data: state.data,
        isLoading: true,
        error: false,
      };
    }
    case GET_ERROR_DETAILS: {
      return {
        data: state.data,
        isLoading: false,
        error: true,
      };
    }
    case UNSET_ERROR_DETAILS: {
      return {
        data: state.data,
        isLoading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
