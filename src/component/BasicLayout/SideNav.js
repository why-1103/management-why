import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default class SideNav extends Component {
  render() {
    const { routesData } = this.props;
    return (
      <div className="list-group">
        {/* 路由链接 */}
        {routesData.map((item) => (
          <NavLink
            key={item.path}
            className="list-group-item"
            activeClassName="navAction"
            to={item.path}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    );
  }
}
