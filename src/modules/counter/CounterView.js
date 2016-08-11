import * as CounterState from './CounterState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Picker,
  View
} from 'react-native';

const Item = Picker.Item;

const CounterView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
    pokemonList: ImmutablePropTypes.list,
    selectedPokemon: PropTypes.number,
    cp: PropTypes.number,
    calculatedCp: PropTypes.string,
  },
  selectPokemon(pokemon) {
    this.props.dispatch(CounterState.selectPokemon(pokemon));
  },
  setCp(cp) {
    this.props.dispatch(CounterState.setCp(cp));
  },
  calculate() {
    this.props.dispatch(CounterState.calculate());
  },

  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;

    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          selectedValue={this.props.selectedPokemon}
          onValueChange={(id) => {
            console.log("slected " + id);
            this.selectPokemon(id);
          }}>
          {this.props.pokemonList.map((pokemon) => (
            <Item
              key={pokemon.get('id')}
              value={pokemon.get('id')}
              label={pokemon.get('name')}
            />
          ))}
        </Picker>
        <TextInput
          onChangeText={(cp) => this.setCp(cp)}
          style={styles.cpInput}
          placeholder="CP"
          keyboardType='numeric'/>

        <TouchableOpacity
          onPress={this.calculate}
          style={[styles.counterButton, loadingStyle]}>
          <Text style={styles.counter}>
            GO
          </Text>
        </TouchableOpacity>

        <Text
          style={styles.textResults}>
          {this.props.calculatedCp}
        </Text>
      </View>
    );
  }
});

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ddd',
    marginTop: 70,
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  picker: {
    width: 300,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  cpInput: {
    textAlign: 'center',
    height: 40,
    marginLeft: 70,
    marginRight: 70,
    backgroundColor: 'white',
  },
  textResults: {

  }
});

export default CounterView;
