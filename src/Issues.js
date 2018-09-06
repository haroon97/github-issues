import React, { Component } from 'react';
import { thunkActionCreator } from './actions/actions';
import { connect } from 'react-redux';
import IssueLoader from './Loader';
import IssuesList from './IssuesList';

class Issues extends Component {

  componentDidMount() {
    this.props.dispatch(thunkActionCreator());
  }

  render() {
    return (
      <div className="App">
        {this.props.issue !== undefined && this.props.issue.isFetching ? <IssueLoader className='loader'/> : null}
        {this.props.issue !== undefined && this.props.issue.isFetched ? 
          this.props.issue.issues.map((issue) => <IssuesList data={issue}/>) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issue: state
  }
}

export default connect(mapStateToProps)(Issues);
