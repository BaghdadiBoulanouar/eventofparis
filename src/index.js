import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/navigation';
import Event from './components/event';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
  <div>
    <div><Navigation /></div>
    <br />
    <center><h1>Que faire à Paris</h1></center>
    <br />
    <div><Event /></div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
