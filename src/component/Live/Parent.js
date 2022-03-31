import React, { Component } from 'react';
import Sum from './Sum';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  add = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  render() {
    const { count } = this.state;
    console.log('render');
    return (
      <div>
        父组件{count}
        <button onClick={this.add}>+1</button>
        <Sum></Sum>
      </div>
    );
  }
}
