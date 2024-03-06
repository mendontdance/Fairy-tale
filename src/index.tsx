import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import { HashRouter } from 'react-router-dom';
import { RootStore } from './store/store';
import { RootStoreContext } from './store/RootStoreContext';
import './styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = new RootStore();
root.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </RootStoreContext.Provider>
  </React.StrictMode>
);
