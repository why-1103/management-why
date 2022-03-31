import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Sum from '../Sum';

export default class Blank extends Component {
  getRoutes = (routes) => {
    return routes.map((item) => {
      // routes
      if (item.routes?.length) {
        return this.getRoutes(item.routes);
      }
      return (
        <Route key={item.path} path={item.path} component={item.component} />
      );
    });
  };

  render() {
    const { routesData } = this.props;
    return (
      <Switch>
        {/* 注册路由 */}
        {/* 设置默认展示内容  */}
        {/* {routesData.map((item) => {
          // routes
          if (item.routes?.length) {
            return (
              <Route key={item.path} path={item.path} element={item.element}>
                {item.routes.map((rout) => (
                  <Route
                    key={rout.path}
                    path={rout.path}
                    element={rout.element}
                  />
                ))}
              </Route>
            );
          } else {
            return (
              <Route key={item.path} path={item.path} element={item.element} />
            );
          }
        })} */}
        {this.getRoutes(routesData)}
        {/* <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/sum" component={Sum} /> */}
        <Redirect to="/home" />
      </Switch>
    );
  }
}
