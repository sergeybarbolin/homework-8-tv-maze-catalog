import { createAction } from 'redux-actions';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const searchRequest = createAction(SEARCH_REQUEST);
export const searchSuccess = createAction(SEARCH_SUCCESS);
export const searchFailure = createAction(SEARCH_FAILURE); 