import { combineReducers } from 'redux';

import showView1 from './showViews/showView1';
import showView2 from './showViews/showView2';
import showView3 from './showViews/showView3';
import showView4 from './showViews/showView4';
import showView5 from './showViews/showView5';
import showView6 from './showViews/showView6';

import quizzReducer from './quizzReducers/quizzReducer';

const reducer = combineReducers({
  showView1,
  showView2,
  showView3,
  showView4,
  showView5,
  showView6,
  quizzReducer,
});

export default reducer;
