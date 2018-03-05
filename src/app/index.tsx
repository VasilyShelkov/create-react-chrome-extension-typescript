import * as React from 'react';
import { Provider } from 'react-redux';

import './index.css';

interface Props {
  store: any;
}
export default ({ store }: Props) => (
  <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Typescript</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/index.ts</code> and save to reload.
        </p>
      </div>
  </Provider>
);
