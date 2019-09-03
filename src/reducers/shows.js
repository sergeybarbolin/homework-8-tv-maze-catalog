import { SHOW_REQUEST, SHOW_SUCCESS, SHOW_FAILURE } from '../actions/show'

const initialState = {
    showInfo: [],
    error: null,
    isLoading: true
}

export default ( state = initialState, {type, payload} ) => {
    switch ( type ) {
        case SHOW_REQUEST:
            return {
                ...state,
                showInfo: [],
                isLoading: true
            };
        case SHOW_SUCCESS:
            return {
                ...state,
                showInfo: payload,
                isLoading: false
            };

        case SHOW_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            };

        default:
            return state
    }
}