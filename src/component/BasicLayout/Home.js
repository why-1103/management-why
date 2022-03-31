import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SkipLink from './SkipLink';
import Message from './Message';
import News from './News';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <SkipLink linkPath="/home/news" activeClassName="active">
                News
              </SkipLink>
            </li>
            <li>
              <SkipLink linkPath="/home/message" activeClassName="active">
                Message
              </SkipLink>
            </li>
          </ul>
          {/* <Outlet /> */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/message" />
          </Switch>
        </div>
      </div>
    );
  }
}
