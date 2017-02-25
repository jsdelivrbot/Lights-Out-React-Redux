import React, {Component} from 'react';
import Light from './light';

class GameBoard extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="game-board">
        <Light />
        <Light />
        <Light />
        <Light />
        <Light />
      </div>
    );
  }
}

export default GameBoard;
