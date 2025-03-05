import { FETCH_QUOTES_REQUEST, FETCH_QUOTES_SUCCESS, FETCH_QUOTES_FAILURE } from './actionTypes';

export const fetchQuotesRequest = () => ({
  type: FETCH_QUOTES_REQUEST
});

export const fetchQuotesSuccess = (quotes) => ({
  type: FETCH_QUOTES_SUCCESS,
  payload: quotes
});

export const fetchQuotesFailure = (error) => ({
  type: FETCH_QUOTES_FAILURE,
  payload: error
});

export const fetchQuotes = () => {
  return (dispatch) => {
    dispatch(fetchQuotesRequest());
    
    fetch('https://dummyjson.com/quotes?limit=5')
      .then(response => response.json())
      .then(data => dispatch(fetchQuotesSuccess(data.quotes)))
      .catch(error => dispatch(fetchQuotesFailure(error.message)));
  };
};
