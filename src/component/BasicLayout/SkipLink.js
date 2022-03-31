import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SkipLink extends Component {
  render() {
    const { children, linkPath, activeClassName } = this.props;
    return (
      <NavLink key={linkPath} activeClassName={activeClassName} to={linkPath}>
        {children}
      </NavLink>
    );
  }
}
