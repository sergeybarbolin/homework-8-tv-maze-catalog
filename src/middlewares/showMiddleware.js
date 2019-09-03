// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import { SHOW_REQUEST, showSuccess, showFailure } from "./../actions/show";
import { show } from "./../api";

export default store => next => async action => {
    const { payload, type } = action;

    type === SHOW_REQUEST &&
    show(payload)
        .then(data => store.dispatch(showSuccess(data)))
        .catch(error => store.dispatch(showFailure(error)))

    next(action)
};