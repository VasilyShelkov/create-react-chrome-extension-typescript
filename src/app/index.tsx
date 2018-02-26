import * as React from 'react';
import { Provider } from 'react-redux';

interface Props {
  store: any;
}
export default ({ store }: Props) => (
  <Provider store={store}>
    <div>
      hello World Vasily, this is my chrome extension in typescript !!!
    </div>
  </Provider>
);
