import React, { Fragment } from 'react';
import Header from './Components/Header'
import Content from  './Components/Content'
import Repasse from './pages/Repasse'

import './style.css'

function App() {
  return (
    <Fragment>
      <Header />
      <Content>
        <Repasse />
      </Content>
    </Fragment>
  );
}

export default App;
