import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux'
import rootReducer  from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";




firebase.initializeApp({
  apiKey: "AIzaSyAwGBZ2rZC8-cJUIQG-lku4sUH_yF4Wp64",
  authDomain: "radiostreamingapp-1f725.firebaseapp.com",
  databaseURL: "https://radiostreamingapp-1f725.firebaseio.com",
  projectId: "radiostreamingapp-1f725",
  storageBucket: "radiostreamingapp-1f725.appspot.com",
  messagingSenderId: "707961223146",
  appId: "1:707961223146:web:7cf94b5ed4466522f12493",
  measurementId: "G-RSGVX7NP05"
});
firebase.firestore();

const store = createStore(rootReducer,
    applyMiddleware(thunk.withExtraArgument(getFirebase)), 
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div></div>;
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
          <App />
      </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

