import authReducer from './authReducer';
import channelReducer from './channelReducer';
import categoriesReducer from './categoryReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    channel: channelReducer,
    category: categoriesReducer,
    firestore: firestoreReducer, 
    firebase: firebaseReducer
});

export default rootReducer;