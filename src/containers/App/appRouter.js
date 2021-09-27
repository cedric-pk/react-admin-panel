import React, { Component } from 'react';
import asyncComponent from '../../helpers/AsyncFunc';
import Route from '../../components/utility/customRoute';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../dashboard.js')),
  },
  {
    path: 'userformular',
    component: asyncComponent(() => import('../Userformular.js')),
  },
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
