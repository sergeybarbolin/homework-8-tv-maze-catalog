// Вам необходимо реализовать search и shows редьюсеры.
// Создайте соответствующие файлы.

import { combineReducers } from 'redux';
import search from './search';
import shows from './shows';

export default combineReducers({
  search,
  shows
});
