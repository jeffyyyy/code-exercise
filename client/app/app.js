import React from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Header from './components/Header';
import { navigateToPage } from './util/helper';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import CarDetailPage from './pages/CarDetail';
import NotFoundPage from './pages/NotFound';
import history from './util/history';
import { ROUTES } from './settings/routes';

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Header navigateToPage={navigateToPage} routes={ROUTES} />
          <Container className='mt-4'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/search' component={SearchPage} />
              <Route path='/make/model/:id' component={CarDetailPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
