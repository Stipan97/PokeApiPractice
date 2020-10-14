import { ThunkAction } from 'redux-thunk';
import { ServerResponseDetails } from '../models/Pokemon';
import { GET_DETAILS } from '../models/types';
import { pokemonDetailsReducer } from '../reducers/pokemonDetailsReducer';

export interface GetPokemonDetailsAction {
  type: typeof GET_DETAILS;
  payload: ServerResponseDetails;
}

export type PokemonDetailsActions = GetPokemonDetailsAction;

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
