import React from 'react';
import { createBrowserHistory } from 'history';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/global.scss'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ContactDetailsPage from './pages/ContactDetailsPage'
import StatisticPage from './pages/StatisticPage'

import NavBar from './cmps/NavBar'

const history = createBrowserHistory();


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Router history={history}>
        <NavBar />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/contact/:id" component={ContactDetailsPage} />
            <Route path="/statistic" component={StatisticPage} />
          </Switch>
        </main>
      </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
