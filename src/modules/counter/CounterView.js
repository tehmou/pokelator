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

var POKEMON = {
  bulbasaur: {
    name: 'Bulbasaur',
    evolution: { avg: 1.92, min: 1.00, max: 13.50, median: 1.57, deviation: 0.20 },
  },
  ivysaur: {
    name: 'Ivysaur',
    evolution: { avg: 1.63, min: 1.00, max: 2.25, median: 1.59, deviation: 0.03 },
  },
  venusaur: {
    name: 'Venusaur',
  },
  charmander: {
    name: 'Charmander'
    evolution: { avg: 2.20, min: 1.00, max: 13.52, median: 1.67, deviation: 0.19 },
  },
  charmeleon: {
    name: 'Charmeleon',
    evolution: { avg: 1.92, min: 1.00, max: 5.78, median: 1.77, deviation: 0.08 },
  },
  charizard: {
    name: 'Charizard',
  },
  squirtle: {
    name: 'Squirtle',
    evolution: { avg: 1.79, min: 1.00, max: 6.14, median: 1.63, deviation: 0.12 },
  },
  wartortle: {
    name: 'Wartortle',
    evolution: { avg: 1.68, min: 1.00, max: 2.89, median: 1.65, deviation: 0.04 },
  },
  blastoise: {
    name: 'Blastoise',
  },
};

const Item = Picker.Item;

const CounterView = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    selectedPokemon: PropTypes.string,
  },
  increment() {
    this.props.dispatch(CounterState.increment());
  },
  reset() {
    this.props.dispatch(CounterState.reset());
  },
  random() {
    this.props.dispatch(CounterState.random());
  },
  bored() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Color',
      title: 'Color Screen'
    }));
  },
  selectPokemon(pokemon) {
    this.props.dispatch(CounterState.selectPokemon(pokemon));
  },

  renderUserInfo() {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfilePhoto}
          source={{
            uri: this.props.userProfilePhoto,
            width: 80,
            height: 80
          }}
        />
        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
      </View>
    );
  },
  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;

    return (
      <View style={styles.container}>

        {this.renderUserInfo()}

        <Picker
          style={styles.picker}
          selectedValue={this.props.selectedPokemon}
          onValueChange={(pokemon) => this.selectPokemon(pokemon)}>
          {Object.keys(POKEMON).map((pokemon) => (
            <Item
              key={pokemon}
              value={pokemon}
              label={POKEMON[pokemon].name}
            />
          ))}
        </Picker>
        <TextInput
          style={styles.cpInput}
          placeholder="CP"
          keyboardType='numeric'/>

        <TouchableOpacity
          onPress={this.increment}
          style={[styles.counterButton, loadingStyle]}>
          <Text style={styles.counter}>
            GO
          </Text>
        </TouchableOpacity>

        <Text style={styles.textResults}>
          Results
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
