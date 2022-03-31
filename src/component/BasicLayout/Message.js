import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MsgDetail from './MsgDetail';
export default class Message extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home/message/detail/1">message001</Link>
          </li>
          <li>
            <Link to="/home/message/detail/2">message002</Link>
          </li>
          <li>
            <Link to="/home/message/detail/3">message003</Link>
          </li>
        </ul>
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id" component={MsgDetail} />
      </div>
    );
  }
}
