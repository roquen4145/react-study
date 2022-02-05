import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement(
    'ul',
    { style: { color: "blue" } },
    React.createElement('li', null, 'item1'),
    React.createElement('li', null, 'item2'),
    React.createElement('li', null, 'item3')
  ),
  document.getElementById('root')
);