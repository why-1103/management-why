import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Users extends Component {
  state = { users: [] };

  componentDidMount() {
    // 订阅消息
    this.token = PubSub.subscribe('userData', (_, data) => {
      this.setState({ users: data });
    });
  }

  componentWillUnmount() {
    // 解除订阅
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users } = this.state;
    return (
      <div className="row">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <img src={user.avatar_url} style={{ width: 100 }} alt="" />
            </a>
            <p className="card-text">{user.login}</p>
          </div>
        ))}
      </div>
    );
  }
}
