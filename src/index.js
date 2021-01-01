import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';
import Form1 from './components/form1';
import Event from './components/event';
import EventList from './components/event-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
  <div>
    <div><NavBar /></div>
    <div><Form1 /></div>
    <div><Event /></div>
    <div><EventList /></div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
