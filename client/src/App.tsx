import React, { ReactElement } from 'react';
import './App.css';
import {
  Header,
  CalculatorForm
} from './components';

const App = (): ReactElement  => (
  <div>
    <Header/>
    <CalculatorForm/>
  </div>
);

export default App;
