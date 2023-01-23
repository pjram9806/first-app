import {combineReducers} from 'redux';
import {messageKey,messageReducer} from './wishMsg/wish-msg.reducer';

let rootReducer = combineReducers({
    [messageKey] :messageReducer
});

export {rootReducer};
