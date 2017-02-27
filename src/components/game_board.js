import React, {Component} from 'react';

class GameBoard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lights: []
    }

  }

  componentWillMount() {
    const lights = []
    for(var i = 0; i < 9; i++) {
      lights.push({id: i, active: Math.random() > 0.5});
    }
    this.setState({lights});
  }

  renderLight() {
    return this.state.lights.map((light) => {
      return (
        <div  key={light.id} className="light">
          {light.active ? "on" : " off"}
        </div> );
    });
  }

  render() {
    return (
      <div className="game-board">
        {this.renderLight()}
      </div>
    );
  }
}


export default GameBoard;
