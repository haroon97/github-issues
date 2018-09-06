// Reducer for issues

const initialState = {
  issues: [],
  isFetching: false,
  isFetched: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ISSUE':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isError: false
      };
    case 'FETCHED_ISSUE':
      return {
        ...state,
        issues: action.data,
        isFetching: false,
        isFetched: true,
        isError: false
      };
    case 'ERROR':
      return {
        ...state,
        issues: [],
        isError: true,
        isFetched: false,
        isFetching: false
      };
  };
};

export default asyncReducer;