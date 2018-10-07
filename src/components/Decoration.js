import React from 'react';

class Decoration extends React.Component {
  render() {
    return (
        <React.Fragment>
          <span className="triangleLeft"></span>
          <span className="triangleRigth"></span>
          <span className="circleLeft"></span>
          <span className="circleRigth"></span>
        </React.Fragment>
      );
  }
}

export default Decoration;
