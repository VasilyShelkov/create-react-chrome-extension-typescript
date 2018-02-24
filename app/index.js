import React from 'react';
import { Provider } from 'react-redux';

export default ({ store }) => (
  <Provider store={store}>
    <div>
      hello World Vasily, this is my chrome extension!!!
    </div>
  </Provider>
)
