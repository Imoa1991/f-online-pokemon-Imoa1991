import React from 'react';
import Searcher from './Searcher';
import PokemonList from './PokemonList';
import '../styles/home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Searcher name={this.props.name} saveInput={this.props.saveInput} character={this.props.character} />
        <PokemonList charactersFromAPI={this.props.charactersFromAPI} character={this.props.character} />
      </div>
    );
  }
}

export default Home;
