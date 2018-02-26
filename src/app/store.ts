import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
// import rootReducer from './rootReducer';

export default (initialState: any) => {
  const store = createStore(
    () => {},
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );

  return store;
};
