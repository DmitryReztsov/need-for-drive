import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './sass/main.scss';
import {Provider} from 'react-redux';
import {YMaps} from 'react-yandex-maps';
import App from './components/App/App';
import {store} from './store';
import {APIKEY} from './utils/settings';

ReactDOM.render(
  <Provider store={store}>
    <YMaps query={{
      apikey: APIKEY,
    }}
    >
      <HashRouter>
        <App />
      </HashRouter>
    </YMaps>
  </Provider>,
  document.getElementById('root'),
);
