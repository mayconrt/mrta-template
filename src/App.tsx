import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header'
import Content from './Components/Content'
import Repasse from './pages/Repasse'
import Home from './pages/Home'
import CreateUser from './pages/CommissionUser'

import './style.css'

function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sheets" component={Repasse} />
            <Route path="/create-user" component={CreateUser} />
          </Switch>
        </Content>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
