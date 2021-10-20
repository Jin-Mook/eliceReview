import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App randStep={1} min={0} max={10} />
    <App randStep={5} min={0} max={100} />
  </React.StrictMode>,
  document.getElementById('root')
);

