import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from '../../app';
import store from '../../app/store';
import './app.css';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  ReactDOM.render(
    <Root store={store(initialState)} />,
    document.querySelector('#root')
  );
});
