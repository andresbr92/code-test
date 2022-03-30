
import React from 'react';
import ResponsiveAppBar from '../src/UI/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/index';
import NewDevice from './views/formDevice/index';
import DeviceDetail from './views/DeviceDetail/index';

function App () {
  return (
    <>
      <ResponsiveAppBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/newdevice'>
          <NewDevice />
        </Route>
        <Route path='/device/edit/:id'>
          <NewDevice />
        </Route>
        <Route path='/device/detail/:id'>
          <DeviceDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
