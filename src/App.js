import React, { Component } from 'react';
import TodoList from './component/TodoList';
import Students from './component/Students';
import GitHubUserSearch from './component/GitHubUserSearch';
import BasicLayout from './component/BasicLayout';
import { Button, DatePicker } from 'antd';
import './App.css';

const { RangePicker } = DatePicker;
class App extends Component {
  render() {
    return (
      <div>
        {/* <TodoList />
        <hr />
        <Students />
        <hr /> */}
        {/* <GitHubUserSearch /> */}
        <BasicLayout />
        {/* <Button type="primary">antd按钮</Button>
        <DatePicker />
        <RangePicker /> */}
      </div>
    );
  }
}

export default App;
