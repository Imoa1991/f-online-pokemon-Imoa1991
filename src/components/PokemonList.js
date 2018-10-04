import React from 'react';
import '../styles/pokemonList.css';
class PokemonList extends React.Component {
  render() {
    return (
      <ul className="pokemonList">
        {
          this.props.charactersFromAPI.filter(item => {
            console.log(item);
            return item.forms.name.toLowerCase().includes(this.props.character);
          })
          .map(characterData =>
            <li className="list" key={characterData.forms.name}>
              <h2 className="name">{characterData.forms.name}</h2>
            </li>
          )
        }
      </ul>
      );
  }
}

export default PokemonList;
