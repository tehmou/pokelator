import * as CounterState from './CounterState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Picker,
  View
} from 'react-native';

var POKEMON = {
  bulbasaur: {
    name: 'Bulbasaur'
  },
  ivysaur: {
    name: 'Ivysaur'
  },
  venusaur: {
    name: 'Venusaur'
  },
  charmander: {
    name: 'Charmander'
  },
  charmeleon: {
    name: 'Charmeleon'
  },
  charizard: {
    name: 'Charizard'
  },
  squirtle: {
    name: 'Squirtle'
  },
  wartortle: {
    name: 'Wartortle'
  },
  blastoise: {
    name: 'Blastoise'
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
        <TouchableOpacity
          onPress={this.increment}
          style={[styles.counterButton, loadingStyle]}>
          <Text style={styles.counter}>
            {this.props.counter}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.reset}>
          <Text style={styles.linkButton}>
            Reset
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.random}>
          <Text style={styles.linkButton}>
            Random
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.bored} accessible={true}>
          <Text style={styles.linkButton}>
            {'I\'m bored!'}
          </Text>
        </TouchableOpacity>

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
    backgroundColor: 'white'
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
  }
});

export default CounterView;
