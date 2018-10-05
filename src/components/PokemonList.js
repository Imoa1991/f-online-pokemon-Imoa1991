import React from 'react';
import '../styles/pokemonList.css';
class PokemonList extends React.Component {
  render() {
    return (
      <ul className="pokemonList">
        {
          this.props.charactersFromAPI.filter(item => {
            console.log(item);
            return item.name.toLowerCase().includes(this.props.character);
          })
          .map(characterData =>
            <li className="list" key={characterData.name}>
              <div className="pokemonHeader">
                <img className="pokemonImage" src={characterData.sprites.front_default} alt="pokemon"/>
                <p className="id">{characterData.id}</p>
              </div>
              <div className="pokemonMain">
                <h2 className="name">{characterData.name}</h2>
                <ul className="types">
                  {
                    characterData.types.map(function(elements){
                      return (
                        <li className="elements" key={elements.type.name}>{elements.type.name}</li>
                      );
                    })
                  }
                </ul>
              </div>
            </li>
          )
        }
      </ul>
    );
  }
}

export default PokemonList;
