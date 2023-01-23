import './App.css';
import React, { useState } from 'react';
import { Fragment } from 'react';
import WishMsg from './components/WishMsg';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

let App = ()=>
{
  return(
    <Fragment>
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
        <a href="#" className="navbar-brand">List & Keys</a>
      </nav>

      <Provider store={store}>
      <WishMsg/>
      </Provider>
    </Fragment>
)
}

export default App;
