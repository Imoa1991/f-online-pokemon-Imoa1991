import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
// import pokemonList from './data/pokemonList.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      character: '',
      charactersFromAPI: []
    }
    this.saveInput=this.saveInput.bind(this);
  }
  componentDidMount(){
    this.search()
    // this.fakeSearch();
  }
  saveInput(e) {
    const value = e.currentTarget.value.toLowerCase();
    this.setState({
      character: value
    });
  }
  search(){
    fetch('http://pokeapi.salestock.net/api/v2/pokemon/?limit=25')
    .then(response => {
      return response.json();
    })
    .then(apiResponse => {
      this.searchPokemon(apiResponse.results);
    })
  }
  searchPokemon(apiResponse){
    let pokemonsData=[];
    apiResponse.forEach(pokemon => {
      console.log(pokemon.url);
      fetch(pokemon.url)
      .then(response => {
        return response.json();
      })
      .then(pokemonData => {
        pokemonsData.push(pokemonData);
        this.setState({
          charactersFromAPI: pokemonsData
        })
      });
    });
  }
  // fakeSearch() {
  //   this.setState({
  //     charactersFromAPI: pokemonList.results
  //   });
  // }
  render() {
    return (
      <div className="App">
        <Home name={this.state.name} saveInput={this.saveInput} character={this.state.character} charactersFromAPI={this.state.charactersFromAPI}/>
      </div>
    );
  }
}

export default App;
