import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {randomizeLights} from '../actions/index';
import {toggleLights} from '../actions/index';

class GameBoard extends Component {

  componentDidMount() {
    this.props.randomizeLights();
  }

  renderLight() {
    return this.props.lights.map((light) => {
      return (
        <div
          onClick={() => this.props.toggleLights(light.id)}
          key={light.id}
          className={`light ${light.active ? 'light-active' : ''}`}
        ></div> );
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

function mapStateToProps(state) {
  return {lights: state.lightsList}
}

export default connect(mapStateToProps, {randomizeLights, toggleLights})(GameBoard);
