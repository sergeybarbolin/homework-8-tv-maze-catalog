import { createAction } from 'redux-actions';

export const SHOW_REQUEST = 'SHOW_REQUEST';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const SHOW_FAILURE = 'SHOW_FAILURE';

export const showRequest = createAction(SHOW_REQUEST);
export const showSuccess = createAction(SHOW_SUCCESS);
export const showFailure = createAction(SHOW_FAILURE);