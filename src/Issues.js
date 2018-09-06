import React, { Component } from 'react';
import { thunkActionCreator } from './actions/actions';
import { connect } from 'react-redux';
import IssueLoader from './Loader';

class Issues extends Component {

  componentDidMount() {
    this.props.dispatch(thunkActionCreator());
  }

  render() {
    return (
      <div className="App">
        {this.props.issues !== undefined && this.props.issues.isFetching ? <IssueLoader className='loader'/> : null}
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
