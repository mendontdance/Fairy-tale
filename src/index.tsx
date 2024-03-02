import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootStore } from './store/store';
import { RootStoreContext } from './store/RootStoreContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = new RootStore();
root.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={store}>
      <Router>
        <App />
      </Router>
    </RootStoreContext.Provider>
  </React.StrictMode>
);
