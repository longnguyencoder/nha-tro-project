import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Redux & Persist imports
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import reduxStore from './redux';

// Tạo store và persistor từ reduxStore()
const { store, persistor } = reduxStore();

// Tạo root React (React 18 trở lên)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render ứng dụng
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
