import {createStore , combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {todosReducers} from './reducers/todosReducer';

const middleware = [thunk];

const reducer = combineReducers({
    todos : todosReducers
})

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;