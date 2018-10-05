import React from 'react';

class PokemonList extends React.Component {
  render() {
    return (
      <ul className="pokemonList">
        {
          this.props.charactersFromAPI.filter(item => {
            console.log(item);
            return item.name.toLowerCase().includes(this.props.character);
          })
          .sort((a,b) => a.id - b.id)
          .map(characterData =>
            <li className="pokemonSpecipications" key={characterData.name}>
              <div className="pokemonHeader">
                <img className="pokemonImage" src={characterData.sprites.front_default} alt="pokemon"/>
                <p className="pokemonId">{"ID/" + characterData.id}</p>
              </div>
              <div className="pokemonMain">
                <h2 className="pokemonName">{characterData.name}</h2>
                <ul className="pokemonTypes">
                  {
                    characterData.types.map(function(elements, id){
                      return (
                        <li className="pokemonElements" key={`${elements.type.name}_${characterData.id}`}>{elements.type.name}</li>
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
