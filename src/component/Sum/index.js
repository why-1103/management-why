import React, { Component } from 'react';
//引入store，用于获取redux中保存状态
import store from '../../redux/store';
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/sum_action';
export default class Sum extends Component {
  state = { carName: '奔驰c63', selectNumber: 0 };

  componentDidMount() {
    // 检测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      this.setState({});
    });
  }

  //加法
  increment = () => {
    const { selectNumber } = this.state;
    store.dispatch(createIncrementAction(selectNumber * 1));
  };
  //减法
  decrement = () => {
    const { selectNumber } = this.state;
    store.dispatch(createDecrementAction(selectNumber * 1));
  };
  //奇数再加
  incrementIfOdd = () => {
    const { selectNumber } = this.state;
    const sum = store.getState();
    if (sum % 2 === 0) {
      store.dispatch(createIncrementAction(selectNumber * 1));
    }
  };
  //异步加
  incrementAsync = () => {
    const { selectNumber } = this.state;
    // createIncrementAsyncAction
    // setTimeout(() => {
    store.dispatch(createIncrementAsyncAction(selectNumber * 1, 500));
    // }, 500);
  };

  handleSelChange = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({ selectNumber: value });
  };

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <input
          style={{ width: 100 }}
          onChange={this.handleSelChange}
          defaultValue={0}
          type="number"
        ></input>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
