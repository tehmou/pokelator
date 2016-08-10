import {connect} from 'react-redux';
import CounterView from './CounterView';

export default connect(
  state => ({
    selectedPokemon: state.getIn(['counter', 'selectedPokemon']),
    calculatedCp: state.getIn(['counter', 'calculatedCp']),
  })
)(CounterView);
