import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import HeaderContainer from '../../container/HeaderContainer';

const App = ({ routes }) => (
  <React.Suspense fallback={<CircularProgress />}>
    <Switch>
      {
        routes.map((route) => (
          <Route
            key={route.key}
            exact={route.exact}
            path={route.path}
            render={
              props => {
                const Component = React.lazy(() => import(`../../${route.component}`))
                return (
                  <>
                    <HeaderContainer />
                    <main>
                        <Component {...props} />
                    </main>
                  </>
                )
              }
            }
          />
        ))
      }
    </Switch>
  </React.Suspense>
);

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      component: PropTypes.string.isRequired,
  }))
}

export default App;
