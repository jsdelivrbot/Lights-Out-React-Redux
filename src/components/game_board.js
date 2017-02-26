import React, {Component} from 'react';
import Light from './light';

function GameBoard(props) {
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


export default GameBoard;
