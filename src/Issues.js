import React from 'react';
import { thunkActionCreator } from './actions/actions';
import { connect } from 'react-redux';
import IssueLoader from './Loader';
import  IssuesList from './IssuesList';
import IssueHeader from './Header';

class Issues extends React.Component {

  componentDidMount() {
    this.props.dispatch(thunkActionCreator());
  }

  render() {
    return (
      <div className="App">
        <div>
        <IssueHeader/>
        </div>
        {console.log(this.props.issue)}
        {this.props.issue !== undefined && this.props.issue.isFetching ? <IssueLoader className='loader'/> : null}
        {this.props.issue !== undefined && this.props.issue.isFetched ? 
          this.props.issue.issues.map((issue) => <IssuesList data={issue} key={issue.id}/>) : null}
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
