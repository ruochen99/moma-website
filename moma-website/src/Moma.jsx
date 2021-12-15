import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Common/Navigation';
import routes from './routes/routes';


class Moma extends Component {
  constructor(props) {
      super(props);
  }


  render() {
    return (
        <div>
          <div className="app-container">
            <Navigation />
            <Switch>
            {
              routes.map(route => {
                if (route.redirect) {
                  return (
                    <Redirect exact={route.exact} from={route.path} to={route.to} key={route.name} />
                  );
                } else {
                  return (
                    <Route exact={route.exact} path={route.path} component={route.component} key={route.name} />
                  );
                }
              })
            }
          </Switch>
          </div>
        </div>
    )
  }
}

export default Moma;
