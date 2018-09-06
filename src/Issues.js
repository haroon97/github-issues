import React, { Component } from 'react';
import { thunkActionCreator } from './actions/actions';
import { connect } from 'react-redux'

class Issues extends Component {

  componentDidMount() {
    this.props.dispatch(thunkActionCreator());
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        {console.log(this.props.issues)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state
  }
}

export default connect(mapStateToProps)(Issues);
