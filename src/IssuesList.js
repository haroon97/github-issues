import React from 'react';
import {Image, List, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';

export default class IssuesList extends React.Component {
  render() { 
    return (
      <div class='list'>
        <List celled size='big'>
        <List.Item>
          <Image avatar src={this.props.data.user.avatar_url} alt='User avatar' />
          <List.Content>
            <List.Header>{this.props.data.title}</List.Header>
            {this.props.data.comments} <Icon name='comment'/>
            created At: {this.props.data.created_at}<br />
            Author: {this.props.data.user.login}<br />
            Status: {this.props.data.state}
          </List.Content>
        </List.Item>    
        </List>
        </div>
    );
  };
};