import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import calcCommandsReducer from 'store/reducers/calculatorModalCommands.js';
import calcPositionReducer from 'store/reducers/calculatorModalPosition.js';
import calcDisplayReducer from 'store/reducers/calculatorModalDisplay.js';

import App from './App.js';

const rootReducer = combineReducers({
  calcCommands: calcCommandsReducer,
  calcPosition: calcPositionReducer,
  calcDisplay:calcDisplayReducer
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.querySelector('#root')
);