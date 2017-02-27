import React, { Component } from 'react';
import GameBoard from './game_board';
import Buttons from './buttons';

export default class App extends Component {
  render() {
    return (
      <div>
        <Buttons />
        <GameBoard />
      </div>
    );
  }
}
