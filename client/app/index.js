import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider, ApolloClient } from 'react-apollo';
import configureStore from './settings/configureStore';
import defaultTheme from './theme/default';
import App from './app';
import './styles/base.scss';

const client = new ApolloClient();
const store = configureStore(client);

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('app')
);
