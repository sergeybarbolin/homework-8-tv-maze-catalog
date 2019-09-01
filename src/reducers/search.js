import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from './../actions/search';

const initialState = {
  shows: [],
  isLoading: false,
  error: null
};

export default ( state = initialState, {type, payload} ) => {
  switch (type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        shows: [],
        isLoading: true
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        shows: payload,
        isLoading: false
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        shows: [],
        isLoading: false,
        error: payload
      };

    default:
      return state;
  }
};