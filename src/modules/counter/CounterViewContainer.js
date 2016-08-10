import {connect} from 'react-redux';
import CounterView from './CounterView';

export default connect(
  state => ({
    pokemonList: state.getIn(['counter', 'pokemonList']),
    selectedPokemon: state.getIn(['counter', 'selectedPokemon']),
    calculatedCp: state.getIn(['counter', 'calculatedCp']),
  })
)(CounterView);
