import React from 'react';
import '../styles/searcher.css';

class Seacrcher extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input id="pokemon" className="nameSearcher" placeholder="Filtra pokemon por nombre..." type="text" onChange={this.props.saveInput} />
      </React.Fragment>
      );
  }
}

export default Seacrcher;
