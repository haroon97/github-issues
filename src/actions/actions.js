// actions for issues page

import store from '../store/configureStore';

export const fetchIssues = () => {
  return {
    type: 'FETCH_ISSUE'
  };
};

export const fetchedIssues = (data) => {
  return {
    type: 'FETCHED_ISSUE',
    data
  };
};

export const error = () => {
  return {
    type: 'ERROR'
  };
};

export const thunkActionCreator = () => {
  store.dispatch(fetchIssues());
  return function(dispatch, getState) {
    return fetch(`https://api.github.com/repos/facebook/create-react-app/issues`)
    .then( (resp) => resp.json() )
    .then( (data) => dispatch(fetchedIssues(data)) )
    .catch( (err) => dispatch(error()) )
  };
};