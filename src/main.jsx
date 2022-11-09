import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HooksApp } from './HooksApp';
import { CounterApp } from './01-UseState/CounterApp';
import { CounterWithCustonHook } from './01-UseState/CounterWithCustonHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  /* <React.StrictMode> */

  <>
    <SimpleForm />
    <hr />
    <hr />
    <CounterWithCustonHook />
    <hr />
    <hr />
    <CounterApp />
  </>

  // </React.StrictMode >

)
