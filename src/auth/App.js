import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { OktaAuth } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import Home from './Home';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-2332007.okta.com/oauth2/default',
  clientId: '0oa1z540gTyD7zz295d6',
  redirectUri: window.location.origin + '/implicit/callback'
});

class App extends Component {

  render() {
    return (
      <Router>
        <Security oktaAuth={oktaAuth}>
          <Route path="/" exact={true} component={Home} />
          <Route path="/implicit/callback" component={LoginCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;
