import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

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
      this.setState({
        charactersFromAPI: apiResponse.results
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Home name={this.state.name} saveInput={this.saveInput} character={this.state.character} charactersFromAPI={this.state.charactersFromAPI}/>
      </div>
    );
  }
}

export default App;
