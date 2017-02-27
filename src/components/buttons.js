import React, {Component} from 'react';
import {connect} from 'react-redux';
import {randomizeLights} from '../actions/index';

class Buttons extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.randomizeLights(49, 30)}
        className="btn"
        type='submit'
        >Randomize</button>
    );
  };
}

export default connect(null, {randomizeLights})(Buttons);
