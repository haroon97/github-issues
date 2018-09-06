import React from 'react';
import {Image, List} from 'semantic-ui-react';
import { connect } from 'react-redux';

class IssuesList extends React.Component {
  render() {
    return (
      <div>
        <h1>List</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issue: state
  }
}

export default (mapStateToProps)(IssuesList);