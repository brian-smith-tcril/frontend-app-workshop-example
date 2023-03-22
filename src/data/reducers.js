import { combineReducers } from 'redux';

import { reducer as examplePage } from '../example';

const createRootReducer = () => combineReducers({
    examplePage,
});

export default createRootReducer;