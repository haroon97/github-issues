import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const IssueHeader = () => (
  <div className='header'>
  <Header as='h2'>
    <Icon name='github' />
    <Header.Content>GitHub Issues Page</Header.Content>
  </Header>
  </div>
)

export default IssueHeader;
