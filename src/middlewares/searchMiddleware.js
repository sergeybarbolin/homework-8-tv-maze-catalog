// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import { searchRequest, searchSuccess, searchFailure } from './../actions/search';
import { search } from './../api';

export default store => next => async action => {

    const { payload, type } = action;

    type === searchRequest.toString() &&
    search(payload)
        .then(data => store.dispatch(searchSuccess(data)))
        .catch(error => store.dispatch(searchFailure(error)))

    next(action);
    
};