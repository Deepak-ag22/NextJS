import { FETCH_QUOTES_REQUEST, FETCH_QUOTES_SUCCESS, FETCH_QUOTES_FAILURE } from './actionTypes';

const initialState = {
  loading: false,
  quotes: [],
  error: ''
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        quotes: action.payload
      };
    case FETCH_QUOTES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default quotesReducer;
