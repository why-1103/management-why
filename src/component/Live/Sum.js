import React, { Component } from 'react';

export default class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentWillMount() {
    console.log('子组件WillMount');
  }
  componentDidMount() {
    console.log('子组件DidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('子组件WillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('子组件shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('子组件WillUpdate');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('子组件DidUpdate');
  }
  add = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  render() {
    console.log('子组件render');
    const { count } = this.state;
    return (
      <div>
        子组件{count}
        <button onClick={this.add}>+1</button>
      </div>
    );
  }
}
