import React from 'react';
import {Image, List, Icon, Segment} from 'semantic-ui-react';

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
            #{this.props.data.number} opened at {this.props.data.created_at} by {this.props.data.user.login}
          </List.Content>
        </List.Item>    
        </List>
      </div>
    );
  };
};