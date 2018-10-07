import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Header from './components/Header';
import { navigateToPage } from './util/helper';
import DashboardPage from './pages/Dashboard';
import SearchPage from './pages/Search';
import CarDetailPage from './pages/CarDetail';
import NotFoundPage from './pages/NotFound';
import history from './util/history';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ConnectedRouter history={history}>
          <Header navigateToPage={navigateToPage} />
          <Container>
            <Switch>
              <Route exact path='/' component={DashboardPage} />
              <Route path='/search' component={SearchPage} />
              <Route path='/make/model/:id' component={CarDetailPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </ConnectedRouter>
      </Router>
    );
  }
}

export default App;
