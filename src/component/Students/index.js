import React, { Component } from 'react';
import axios from 'axios';

export default class Students extends Component {
  state = { students: [] };

  getData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      (response) => {
        const { data: students } = response;
        this.setState({ students });
      },
      (error) => {
        console.log(error);
      },
    );
  };

  render() {
    const { students } = this.state;
    return (
      <div>
        <button onClick={this.getData}>获取数据</button>
        <span>{JSON.stringify(students)}</span>
      </div>
    );
  }
}
