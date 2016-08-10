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

var POKEMON = [ { id: 63,
    name: 'Abra',
    evolution: { avg: 2.59, min: 1, max: 13.42, median: 2, deviation: 0.24 } },
  { id: 69,
    name: 'Bellsprout',
    evolution: { avg: 1.89, min: 1, max: 7.69, median: 1.58, deviation: 0.15 } },
  { id: 1,
    name: 'Bulbasaur',
    evolution: { avg: 2.22, min: 1.23, max: 11, median: 1.59, deviation: 0.15 } },
  { id: 10,
    name: 'Caterpie',
    evolution: { avg: 1.49, min: 1, max: 12.46, median: 1.08, deviation: 0.19 } },
  { id: 4,
    name: 'Charmander',
    evolution: { avg: 2.34, min: 1, max: 9.31, median: 1.71, deviation: 0.14 } },
  { id: 5,
    name: 'Charmeleon',
    evolution: { avg: 2.01, min: 1.03, max: 5.78, median: 1.88, deviation: 0.06 } },
  { id: 35,
    name: 'Clefairy',
    evolution: { avg: 1.93, min: 1, max: 2.7, median: 2.05, deviation: 0.07 } },
  { id: 104,
    name: 'Cubone',
    evolution: { avg: 1.79, min: 1.07, max: 3.36, median: 1.66, deviation: 0.06 } },
  { id: 50,
    name: 'Diglett',
    evolution: { avg: 3.18, min: 2.67, max: 4.83, median: 2.76, deviation: 0.08 } },
  { id: 84,
    name: 'Doduo',
    evolution: { avg: 2.2, min: 1.26, max: 2.75, median: 2.24, deviation: 0.11 } },
  { id: 148,
    name: 'Dragonair',
    evolution: { avg: 2.01, min: 1, max: 3.91, median: 2.05, deviation: 0.06 } },
  { id: 147,
    name: 'Dratini',
    evolution: { avg: 2.56, min: 1.4, max: 12.5, median: 1.85, deviation: 0.13 } },
  { id: 96,
    name: 'Drowzee',
    evolution: { avg: 2.09, min: 1, max: 6.67, median: 2.08, deviation: 0.2 } },
  { id: 133,
    name: 'Eevee -> Flareon',
    evolution: { avg: 2.59, min: 1, max: 10.2, median: 2.49, deviation: 0.33 } },
  { id: 133,
    name: 'Eevee -> Jolteon',
    evolution: { avg: 2.13, min: 1, max: 6.13, median: 2.02, deviation: 0.28 } },
  { id: 133,
    name: 'Eevee -> Vaporeon',
    evolution: { avg: 2.76, min: 1, max: 12.1, median: 2.67, deviation: 0.43 } },
  { id: 23,
    name: 'Ekans',
    evolution: { avg: 2.22, min: 1, max: 2.67, median: 2.26, deviation: 0.09 } },
  { id: 102,
    name: 'Exeggcute',
    evolution: { avg: 2.61, min: 1, max: 3.18, median: 2.73, deviation: 0.1 } },
  { id: 92,
    name: 'Gastly',
    evolution: { avg: 1.95, min: 1.02, max: 4.32, median: 1.76, deviation: 0.09 } },
  { id: 74,
    name: 'Geodude',
    evolution: { avg: 1.84, min: 1.5, max: 4.94, median: 1.73, deviation: 0.08 } },
  { id: 44,
    name: 'Gloom',
    evolution: { avg: 2.05, min: 1, max: 3.96, median: 1.49, deviation: 0.04 } },
  { id: 118,
    name: 'Goldeen',
    evolution: { avg: 2.21, min: 2, max: 2.48, median: 2.2, deviation: 0.08 } },
  { id: 75,
    name: 'Graveler',
    evolution: { avg: 1.68, min: 1.63, max: 1.81, median: 1.64, deviation: 0.03 } },
  { id: 88,
    name: 'Grimer',
    evolution: { avg: 2.44, min: 2.44, max: 2.44, median: 2.44, deviation: 0.02 } },
  { id: 58,
    name: 'Growlithe',
    evolution: { avg: 2.35, min: 1, max: 5.01, median: 2.28, deviation: 0.15 } },
  { id: 93,
    name: 'Haunter',
    evolution: { avg: 1.9, min: 1, max: 4.73, median: 1.53, deviation: 0.05 } },
  { id: 116,
    name: 'Horsea',
    evolution: { avg: 2.19, min: 2, max: 2.31, median: 2.23, deviation: 0.05 } },
  { id: 2,
    name: 'Ivysaur',
    evolution: { avg: 1.91, min: 1.47, max: 2.25, median: 2.01, deviation: 0.03 } },
  { id: 39,
    name: 'Jigglypuff',
    evolution: { avg: 2.41, min: 1.85, max: 2.76, median: 2.52, deviation: 0.04 } },
  { id: 140,
    name: 'Kabuto',
    evolution: { avg: 2.11, min: 1.97, max: 2.37, median: 2.06, deviation: 0.03 } },
  { id: 64,
    name: 'Kadabra',
    evolution: { avg: 2.09, min: 1, max: 3.43, median: 1.74, deviation: 0.04 } },
  { id: 14,
    name: 'Kakuna',
    evolution: { avg: 3.28, min: 1.8, max: 5.07, median: 3.35, deviation: 0.16 } },
  { id: 109,
    name: 'Koffing',
    evolution: { avg: 4, min: 4, max: 4, median: 4, deviation: 0.03 } },
  { id: 98,
    name: 'Krabby',
    evolution: { avg: 2.36, min: 1.33, max: 4.05, median: 2.36, deviation: 0.09 } },
  { id: 67,
    name: 'Machoke',
    evolution: { avg: 1.56, min: 1.48, max: 1.63, median: 1.56, deviation: 0.02 } },
  { id: 66,
    name: 'Machop',
    evolution: { avg: 1.69, min: 1, max: 2.25, median: 1.65, deviation: 0.06 } },
  { id: 129,
    name: 'Magikarp',
    evolution: { avg: 10.55, min: 2, max: 12.7, median: 10.94, deviation: 0.53 } },
  { id: 81,
    name: 'Magnemite',
    evolution: { avg: 2.23, min: 2.16, max: 2.49, median: 2.22, deviation: 0.06 } },
  { id: 56,
    name: 'Mankey',
    evolution: { avg: 2.14, min: 1, max: 2.28, median: 2.19, deviation: 0.08 } },
  { id: 52,
    name: 'Meowth',
    evolution: { avg: 2.2, min: 1.98, max: 2.31, median: 2.2, deviation: 0.06 } },
  { id: 11,
    name: 'Metapod',
    evolution: { avg: 3.38, min: 3.1, max: 3.79, median: 3.52, deviation: 0.1 } },
  { id: 29,
    name: 'Nidoran F',
    evolution: { avg: 1.71, min: 1.63, max: 2.48, median: 1.66, deviation: 0.07 } },
  { id: 32,
    name: 'Nidoran M',
    evolution: { avg: 1.68, min: 1.63, max: 1.85, median: 1.68, deviation: 0.07 } },
  { id: 30,
    name: 'Nidorina',
    evolution: { avg: 1.84, min: 1, max: 2.81, median: 1.82, deviation: 0.04 } },
  { id: 33,
    name: 'Nidorino',
    evolution: { avg: 1.83, min: 1.81, max: 1.87, median: 1.82, deviation: 0.03 } },
  { id: 43,
    name: 'Oddish',
    evolution: { avg: 1.53, min: 1.03, max: 2.36, median: 1.5, deviation: 0.08 } },
  { id: 138,
    name: 'Omanyte',
    evolution: { avg: 4.44, min: 4.44, max: 4.44, median: 4.44, deviation: 0.04 } },
  { id: 46,
    name: 'Paras',
    evolution: { avg: 1.94, min: 1.56, max: 2.07, median: 1.95, deviation: 0.1 } },
  { id: 17,
    name: 'Pidgeotto',
    evolution: { avg: 1.94, min: 1, max: 5.56, median: 1.76, deviation: 0.2 } },
  { id: 16,
    name: 'Pidgey',
    evolution: { avg: 1.92, min: 1, max: 7.26, median: 1.89, deviation: 0.34 } },
  { id: 25,
    name: 'Pikachu',
    evolution: { avg: 2.46, min: 1.27, max: 4.4, median: 2.34, deviation: 0.05 } },
  { id: 60,
    name: 'Poliwag',
    evolution: { avg: 1.72, min: 1.33, max: 2.43, median: 1.72, deviation: 0.07 } },
  { id: 61,
    name: 'Poliwhirl',
    evolution: { avg: 1.79, min: 1.34, max: 2.02, median: 1.9, deviation: 0.04 } },
  { id: 77,
    name: 'Ponyta',
    evolution: { avg: 1.5, min: 1, max: 2.23, median: 1.47, deviation: 0.06 } },
  { id: 54,
    name: 'Psyduck',
    evolution: { avg: 2.31, min: 1.92, max: 3, median: 2.26, deviation: 0.11 } },
  { id: 19,
    name: 'Rattata',
    evolution: { avg: 2.63, min: 1.33, max: 6.87, median: 2.62, deviation: 0.33 } },
  { id: 111,
    name: 'Rhyhorn',
    evolution: { avg: 2.06, min: 1.88, max: 3.68, median: 1.92, deviation: 0.06 } },
  { id: 27,
    name: 'Sandshrew',
    evolution: { avg: 2.35, min: 1.8, max: 2.52, median: 2.41, deviation: 0.07 } },
  { id: 86,
    name: 'Seel',
    evolution: { avg: 1.68, min: 1.04, max: 2.04, median: 1.96, deviation: 0.02 } },
  { id: 90,
    name: 'Shellder',
    evolution: { avg: 2.58, min: 2.52, max: 2.61, median: 2.58, deviation: 0.05 } },
  { id: 79,
    name: 'Slowpoke',
    evolution: { avg: 2.23, min: 1, max: 3.51, median: 2.23, deviation: 0.07 } },
  { id: 21,
    name: 'Spearow',
    evolution: { avg: 2.64, min: 1, max: 3.38, median: 2.65, deviation: 0.18 } },
  { id: 7,
    name: 'Squirtle',
    evolution: { avg: 1.74, min: 1, max: 3.04, median: 1.63, deviation: 0.07 } },
  { id: 120,
    name: 'Staryu',
    evolution: { avg: 2.37, min: 1.5, max: 2.57, median: 2.42, deviation: 0.09 } },
  { id: 72,
    name: 'Tentacool',
    evolution: { avg: 3.47, min: 2.43, max: 12.2, median: 2.57, deviation: 0.13 } },
  { id: 48,
    name: 'Venonat',
    evolution: { avg: 1.9, min: 1.82, max: 2.46, median: 1.87, deviation: 0.11 } },
  { id: 100,
    name: 'Voltorb',
    evolution: { avg: 2.01, min: 1.99, max: 2.04, median: 2.01, deviation: 0.04 } },
  { id: 37,
    name: 'Vulpix',
    evolution: { avg: 2.5, min: 1, max: 2.87, median: 2.77, deviation: 0.05 } },
  { id: 8,
    name: 'Wartortle',
    evolution: { avg: 1.83, min: 1.62, max: 2.48, median: 1.66, deviation: 0.03 } },
  { id: 13,
    name: 'Weedle',
    evolution: { avg: 1.17, min: 1, max: 5, median: 1.08, deviation: 0.14 } },
  { id: 70,
    name: 'Weepinbell',
    evolution: { avg: 1.49, min: 1, max: 1.75, median: 1.6, deviation: 0.02 } },
  { id: 41,
    name: 'Zubat',
    evolution: { avg: 3.15, min: 1, max: 10.05, median: 3.14, deviation: 0.32 } } ];

function getPokemonById(id) {
  console.log("getPokemonById(" + id + ")");
  for (var i in POKEMON) {
    var pokemon = POKEMON[i];
      if (pokemon.id === id) {
      return pokemon;
    }
  }
  return { id: 0 };
}

const Item = Picker.Item;

const CounterView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
    selectedPokemon: PropTypes.object,
    cp: PropTypes.number,
    calculatedCp: PropTypes.number,
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
          selectedValue={this.props.selectedPokemon.id}
          onValueChange={(id) => {
            console.log("slected " + id);
            this.selectPokemon(getPokemonById(id));
          }}>
          {POKEMON.map((pokemon) => (
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
