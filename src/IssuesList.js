import React from 'react';
import {Image, List} from 'semantic-ui-react';
import { connect } from 'react-redux';

export default class IssuesList extends React.Component {
  render() { 
    return (
      <div>
        <h1>{ this.props.data.id }</h1>        
      </div>
    );
  };
};