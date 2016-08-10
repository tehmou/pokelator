import * as CounterState from './CounterState';
import * as NavigationState from '../../modules/navigation/NavigationState';
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
    pokemonList: PropTypes.array,
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
console.log("render");
console.log(this.props.pokemonList);

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
              key={pokemon.id}
              value={pokemon.id}
              label={pokemon.name}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
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
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
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
