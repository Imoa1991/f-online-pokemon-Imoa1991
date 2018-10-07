import React from 'react';
import Searcher from './Searcher';
import PokemonList from './PokemonList';
import Decoration from './Decoration';

class Home extends React.Component {
  render() {
    return (
      <div className="pokemons">
        <Searcher name={this.props.name} saveInput={this.props.saveInput} character={this.props.character} />
        <PokemonList charactersFromAPI={this.props.charactersFromAPI} character={this.props.character} />
        <Decoration />
      </div>
    );
  }
}

export default Home;
