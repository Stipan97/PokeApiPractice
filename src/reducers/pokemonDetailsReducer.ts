import { PokemonDetailsActions } from '../actions/pokemonDetailsAction';
import { ServerResponseDetails } from '../models/Pokemon';
import { GET_DETAILS } from '../models/types';

export interface PokemonsDetailsState {
  data?: ServerResponseDetails[];
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
    default: {
      return state;
    }
  }
};
