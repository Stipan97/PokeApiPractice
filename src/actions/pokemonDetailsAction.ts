import { ThunkAction } from 'redux-thunk';
import { ServerResponseDetails } from '../models/Pokemon';
import {
  GET_DETAILS,
  GET_ERROR_DETAILS,
  GET_LOADING_DETAILS,
} from '../models/types';
import { pokemonDetailsReducer } from '../reducers/pokemonDetailsReducer';

interface GetPokemonDetailsAction {
  type: typeof GET_DETAILS;
  payload: ServerResponseDetails;
}

interface LoadingPokemonDetailsAction {
  type: typeof GET_LOADING_DETAILS;
}

interface ErrorPokemonDetailsAction {
  type: typeof GET_ERROR_DETAILS;
}

export type PokemonDetailsActions =
  | GetPokemonDetailsAction
  | LoadingPokemonDetailsAction
  | ErrorPokemonDetailsAction;

export const loadPokemonDetails = (
  name: string,
): ThunkAction<
  void,
  typeof pokemonDetailsReducer,
  null,
  PokemonDetailsActions
> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_LOADING_DETAILS,
      });

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const responseData: ServerResponseDetails = await response.json();

      dispatch({
        type: GET_DETAILS,
        payload: responseData,
      });
    } catch (error) {
      //stavi dispatch za error details
    }
  };
};
