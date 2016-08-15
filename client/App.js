
import css from './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(<Button />,document.getElementById('root'));

