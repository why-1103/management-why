import React, { Component } from 'react';

import Search from './Search';
import Users from './Users';
import './index.css';
export default class GitHubUserSearch extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <Users />
      </div>
    );
  }
}
