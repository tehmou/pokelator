import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {generateRandomNumber} from '../../services/randomNumberService';

// Initial state
const initialState = Map({
  selectedPokemon: 'bulbasaur',
  calculatedCp: 0,
});

// Actions
const SELECT_POKEMON = 'CounterState/SELECT_POKEMON';
const CALCULATE = 'CounterState/CALCULATE';

// Action creators
export function selectPokemon(pokemon) {
  return {
    type: SELECT_POKEMON,
    payload: pokemon
  }
}

export function calculate() {
  return {type: CALCULATE};
}

// Reducer
export default function CounterStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case SELECT_POKEMON:
      return state
        .set('selectedPokemon', action.payload);

    case CALCULATE:
      return state;

    default:
      return state;
  }
}
