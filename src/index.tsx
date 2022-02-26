import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './sass/main.scss';
import {Provider} from 'react-redux';
import {YMaps} from 'react-yandex-maps';
import App from './components/App/App';
import {store} from './store';

ReactDOM.render(
  <Provider store={store}>
    <YMaps query={{
      apikey: 'ceb8bf1f-3f9d-44a1-860e-bb81742a3049',
    }}
    >
      <HashRouter>
        <App />
      </HashRouter>
    </YMaps>
  </Provider>,
  document.getElementById('root'),
);
