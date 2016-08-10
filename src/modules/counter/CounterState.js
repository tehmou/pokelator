import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {generateRandomNumber} from '../../services/randomNumberService';

// Initial state
const initialState = Map({
  selectedPokemon: {},
  cp: 0,
  calculatedCp: 0,
});

// Actions
const SELECT_POKEMON = 'CounterState/SELECT_POKEMON';
const SET_CP = 'CounterState/SET_CP';
const CALCULATE = 'CounterState/CALCULATE';

// Action creators
export function selectPokemon(pokemon) {
  return {
    type: SELECT_POKEMON,
    payload: pokemon,
  }
}

export function setCp(cp) {
  return {
    type: SET_CP,
    payload: cp,
  };
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

    case SET_CP:
      return state
        .set('cp', action.payload);

    case CALCULATE:
      var cp = state.get('cp');
      var multiplier = state.get('selectedPokemon').evolution.avg;
      return state
        .set('calculatedCp', multiplier * cp);

    default:
      return state;
  }
}
